# Edit cell
When it comes to business scenarios of editing tables, the VTable library provides corresponding editors so that you can easily implement various editing needs.

# Steps for usage

## 1. Reference the editor package of VTable:
First, make sure you have installed the VTable library and related editor packages correctly. You can install them using the following command:

```shell
npm install @visactor/vtable-editors
```

Introduce the required type of editor module into your code:

```javascript
import { DateInputEditor, InputEditor, ListEditor } from '@visactor/vtable-editors';
```

## 2. Create editor:
The VTable-ediotrs library currently provides three editor types, including text input boxes, date pickers, drop-down lists, etc. You can choose the appropriate editor according to your needs.

Here is sample code to create an editor:

```javascript
const inputEditor = new InputEditor();
const dateInputEditor = new DateInputEditor();
const listEditor = new ListEditor({ values: ['Female', 'Male'] });
```

In the above example, we created a text input box editor (`InputEditor`), a date picker editor (`DateInputEditor`) and a drop-down list editor (`ListEditor`). You can choose the appropriate editor type according to your actual needs.
## 3. Register and use the editor:
Before using the editor, you need to register the editor instance into VTable:
```javascript
//Register editor to VTable
VTable.register.editor('name-editor', inputEditor);
VTable.register.editor('name-editor2', inputEditor2);
VTable.register.editor('number-editor', numberEditor);
VTable.register.editor('date-editor', dateInputEditor);
VTable.register.editor('list-editor', listEditor);
```
Next, you need to specify the editor to use in the columns configuration(If it is a pivot table, configure the editor in indicators):

```javascript
columns: [
  { title: 'name', field: 'name', editor(args)=>{
    if(args.row%2==0)
      return 'name-editor';
    else
      return 'name-editor2';
  } },
  { title: 'age', field: 'age', editor: 'number-editor' },
  { title: 'gender', field: 'gender', editor: 'list-editor' },
  { title: 'birthday', field: 'birthDate', editor: 'date-editor' },
]
```
In a table, users can start editing by `double-clicking` a cell and then selecting the editor to use for input.

Note: The editors in the VTable library are all implemented based on the browser's native input box, so problems may occur in some special cases, such as input method input, input method pop-up windows, etc. You can adjust and optimize according to actual needs.

Editor configuration can be defined in columns or global options. It also supports custom function writing:

```
editor?: string | IEditor | ((args: BaseCellInfo & { table: BaseTableAPI }) => string | IEditor);
```
## 4. Customize an editor:
If the several editors provided by the VTable-ediotrs library cannot meet your needs, you can implement a custom editor. To do this, you need to create a class that implements the requirements of the editor interface (`IEditor`) and provides the necessary methods and logic.

You can use the following flow chart to understand the relationship between the editor and VTable:

![image](https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/guide/editCellProcess.png)

The following is sample code for a custom editor:

```javascript
class DateEditor implements IEditor {
  editorConfig: any;
  element: HTMLInputElement;
  container: HTMLElement;
  successCallback: Function;
  picker: any;
  constructor(editorConfig: any) {
    this.editorConfig = editorConfig;
  }
  beginEditing(container: HTMLElement, referencePosition: { rect: RectProps; placement?: Placement }, value?: string) {
    const that = this;
    this.container = container;
    // const cellValue = luxon.DateTime.fromFormat(value, 'yyyy年MM月dd日').toFormat('yyyy-MM-dd');
    const input = document.createElement('input');

    input.setAttribute('type', 'text');

    input.style.padding = '4px';
    input.style.width = '100%';
    input.style.boxSizing = 'border-box';
    input.style.position = 'absolute';
    input.value = value as string;
    this.element = input;
    container.appendChild(input);
    // Pikaday是一个第三方日历组件
    const picker = new Pikaday({
      field: input,
      format: 'D/M/YYYY',
      toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}年${month}月${day}日`;
      },
      parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
      },
      onSelect: function () {
        const date = this.getDate();
        that.successCallback();
      }
    });
    this.picker = picker;
    if (referencePosition?.rect) {
      this.adjustPosition(referencePosition.rect);
    }
    this.picker.show();
  }

  adjustPosition(rect: RectProps) {
    this.element.style.top = rect.top + 'px';
    this.element.style.left = rect.left + 'px';
    this.element.style.width = rect.width + 'px';
    this.element.style.height = rect.height + 'px';
  }
  getValue() {
    return this.element.value;
  }
  exit() {
    this.picker.destroy();
    this.container.removeChild(this.element);
  }
  targetIsOnEditor(target: HTMLElement) {
    if (target === this.element || this.picker.el.contains(target)) {
      return true;
    }
    return false;
  }
  bindSuccessCallback(successCallback: Function) {
    this.successCallback = successCallback;
  }
}
const custom_date_editor = new DateEditor({});
VTable.register.editor('custom-date', custom_date_editor);

```
In the above example, we created a custom editor named `DateEditor` and implemented the methods required by the `IEditor` interface. Then, we register the custom editor into the VTable through the `VTable.register.editor` method for use in the table.

`IEditor` interface's definition(github：https://github.com/VisActor/VTable/blob/feat/editCell/packages/vtable-editors/src/types.ts)：
```
export interface IEditor {
  /** 编辑器类型 */
  editorType?: string;
  /** 编辑配置 */
  editorConfig: any;
  /* 编辑器挂载的容器 由vtable传入 */
  container: HTMLElement;
  /** 编辑完成后调用。注意如果是（enter键，鼠标点击其他位置）这类编辑完成已有VTable实现，编辑器内部有完成按钮等类似的完成操作需要调用这个方法 */
  successCallback?: Function;
  /** 获取编辑器当前值 */
  getValue: () => string | number | null;
  /** 编辑器进入编辑状态 */
  beginEditing: (
    container: HTMLElement,
    referencePosition: { rect: RectProps; placement?: Placement },
    value?: string
  ) => void;
  /** 编辑器退出编辑状态 */
  exit: () => void;
  /** 判断鼠标点击的target是否属于编辑器内部元素 */
  targetIsOnEditor: (target: HTMLElement) => boolean;
  /** 由VTable调用来传入编辑成功的回调  请将callback赋值到successCallback */
  bindSuccessCallback?: (callback: Function) => void;
}
```

## 5. Edit event listening:
VTable provides the function of editing event listening. You can listen to the editing data event and execute the corresponding logic in the event callback.

The following is a sample code for editing event listening:

```javascript
const tableInstance = new VTable.ListTable(option);
tableInstance.on('change_cell_value', () => {
  //Edit cell data
});
```

## 6. Obtain data after editing:
When the user completes editing and submits the data, you can obtain the edited data for subsequent processing. You can directly get the records value

```javascript
// Get the full data of the current table
tableInstance.records;
```

## 7. Edit trigger timing
Editing trigger timing support: double-click a cell to enter editing, click a cell to enter editing, and call the API to manually start editing.
```
  /** Editing trigger timing Double-click event Click event API manually starts editing. The default is double-click 'doubleclick' */
  editCellTrigger?: 'doubleclick' | 'click' | 'api';
```

## 8. Related APIs

```
  /** Set the value of the cell. Note that it corresponds to the original value of the source data, and the vtable instance records will be modified accordingly */
  changeCellValue: (col: number, row: number, value: string | number | null) => void;

  /** Get the editor of cell configuration */
  getEditor: (col: number, row: number) => IEditor;

  /** Enable cell editing */
  startEditCell: (col?: number, row?: number) => void;

  /** End editing */
  completeEditCell: () => void;
```

Through the above steps, you can create a table with editing functions, select the appropriate editor type according to business needs, customize the editor, listen to editing events, and obtain edited data. In this way, users can easily edit the data in the table, and you can process the edited data accordingly.