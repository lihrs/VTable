import type { IRect, Stage } from '@visactor/vrender-core';
import { Group, createStage, vglobal } from '@visactor/vrender-core';
import { GridComponent } from './grid-component';
import { createDateHeader } from './date-header';
import type { Gantt } from '../Gantt';
import { Env } from '../tools/env';

export class Scenegraph {
  dateStepWidth: number;
  rowHeight: number;
  _scales: {}[];
  grid: GridComponent;
  dateHeader: Group;
  _gantt: any;
  tableGroup: Group;
  stage: Stage;
  constructor(gantt: Gantt) {
    this._gantt = gantt;

    let width;
    let height;
    if (Env.mode === 'node') {
      // vglobal.setEnv('node', gantt.options.modeParams);
      // width = table.canvasWidth;
      // height = table.canvasHeight;
    } else {
      vglobal.setEnv('browser');
      width = gantt.canvas.width;
      height = gantt.canvas.height;
    }
    this.stage = createStage({
      canvas: gantt.canvas,
      width,
      height,
      disableDirtyBounds: false,
      // background: gantt.theme.underlayBackgroundColor,
      // dpr: gantt.internalProps.pixelRatio,
      enableLayout: true,
      afterRender: () => {
        this._gantt.fireListeners('after_render', null);
      }
    });

    this.stage.defaultLayer.setTheme({
      group: {
        boundsPadding: 0,
        strokeBoundsBuffer: 0,
        lineJoin: 'round'
      },
      text: {
        ignoreBuf: true
      }
    });
    initSceneGraph(this);
    this.stage.defaultLayer.add(this.tableGroup);
  }

  createSceneGraph() {
    // this.dateHeader = createContainerGroup(100, 100);
    this.grid = new GridComponent();
  }

  updateTableSize() {
    this.tableGroup.setAttributes({
      x: this.table.tableX,
      y: this.table.tableY,
      width: Math.min(
        this.table.tableNoFrameWidth,
        Math.max(
          this.colHeaderGroup.attribute.width,
          this.bodyGroup.attribute.width,
          this.bottomFrozenGroup.attribute.width,
          0
        ) +
          Math.max(
            this.cornerHeaderGroup.attribute.width,
            this.rowHeaderGroup.attribute.width,
            this.leftBottomCornerGroup.attribute.width,
            0
          ) +
          Math.max(
            this.rightTopCornerGroup.attribute.width,
            this.rightFrozenGroup.attribute.width,
            this.rightBottomCornerGroup.attribute.width,
            0
          )
      ),
      height: Math.min(
        this.table.tableNoFrameHeight,
        Math.max(
          this.colHeaderGroup.attribute.height,
          this.cornerHeaderGroup.attribute.height,
          this.rightTopCornerGroup.attribute.height,
          0
        ) +
          Math.max(
            this.rowHeaderGroup.attribute.height,
            this.bodyGroup.attribute.height,
            this.rightFrozenGroup.attribute.height,
            0
          ) +
          Math.max(
            this.leftBottomCornerGroup.attribute.height,
            this.bottomFrozenGroup.attribute.height,
            this.rightBottomCornerGroup.attribute.height,
            0
          )
      )
    } as any);

    if (this.tableGroup.border && this.tableGroup.border.type === 'rect') {
      if (this.table.theme.frameStyle?.innerBorder) {
        this.tableGroup.border.setAttributes({
          x: this.table.tableX + this.tableGroup.border.attribute.lineWidth / 2,
          y: this.table.tableY + this.tableGroup.border.attribute.lineWidth / 2,
          width: this.tableGroup.attribute.width - this.tableGroup.border.attribute.lineWidth,
          height: this.tableGroup.attribute.height - this.tableGroup.border.attribute.lineWidth
        });
      } else {
        this.tableGroup.border.setAttributes({
          x: this.table.tableX - this.tableGroup.border.attribute.lineWidth / 2,
          y: this.table.tableY - this.tableGroup.border.attribute.lineWidth / 2,
          width: this.tableGroup.attribute.width + this.tableGroup.border.attribute.lineWidth,
          height: this.tableGroup.attribute.height + this.tableGroup.border.attribute.lineWidth
        });
      }
    } else if (this.tableGroup.border && this.tableGroup.border.type === 'group') {
      if (this.table.theme.frameStyle?.innerBorder) {
        this.tableGroup.border.setAttributes({
          x: this.table.tableX + this.tableGroup.border.attribute.lineWidth / 2,
          y: this.table.tableY + this.tableGroup.border.attribute.lineWidth / 2,
          width: this.tableGroup.attribute.width - this.tableGroup.border.attribute.lineWidth,
          height: this.tableGroup.attribute.height - this.tableGroup.border.attribute.lineWidth
        });
        (this.tableGroup.border.firstChild as IRect)?.setAttributes({
          x: 0,
          y: 0,
          width: this.tableGroup.attribute.width - this.tableGroup.border.attribute.lineWidth,
          height: this.tableGroup.attribute.height - this.tableGroup.border.attribute.lineWidth
        });
      } else {
        this.tableGroup.border.setAttributes({
          x: this.table.tableX - this.tableGroup.border.attribute.lineWidth / 2,
          y: this.table.tableY - this.tableGroup.border.attribute.lineWidth / 2,
          width: this.tableGroup.attribute.width + this.tableGroup.border.attribute.lineWidth,
          height: this.tableGroup.attribute.height + this.tableGroup.border.attribute.lineWidth
        });
        (this.tableGroup.border.firstChild as IRect)?.setAttributes({
          x: this.tableGroup.border.attribute.lineWidth / 2,
          y: this.tableGroup.border.attribute.lineWidth / 2,
          width: this.tableGroup.attribute.width,
          height: this.tableGroup.attribute.height
        });
      }
    }

    if (this.table.bottomFrozenRowCount > 0) {
      this.bottomFrozenGroup.setAttribute(
        'y',
        this.tableGroup.attribute.height - this.table.getBottomFrozenRowsHeight()
      );
      this.leftBottomCornerGroup.setAttributes({
        visible: true,
        y: this.tableGroup.attribute.height - this.table.getBottomFrozenRowsHeight(),
        height: this.table.getBottomFrozenRowsHeight(),
        width: this.table.getFrozenColsWidth()
      });
      this.rightBottomCornerGroup.setAttributes({
        visible: true,
        y: this.tableGroup.attribute.height - this.table.getBottomFrozenRowsHeight(),
        height: this.table.getBottomFrozenRowsHeight()
      });
    }

    if (this.table.rightFrozenColCount > 0) {
      this.rightFrozenGroup.setAttribute('x', this.tableGroup.attribute.width - this.table.getRightFrozenColsWidth());
      this.rightTopCornerGroup.setAttributes({
        visible: true,
        x: this.tableGroup.attribute.width - this.table.getRightFrozenColsWidth(),
        width: this.table.getRightFrozenColsWidth(),
        height: this.table.getFrozenRowsHeight()
      });
      this.rightBottomCornerGroup.setAttributes({
        visible: true,
        x: this.tableGroup.attribute.width - this.table.getRightFrozenColsWidth(),
        width: this.table.getRightFrozenColsWidth()
      });
    }
  }
}

export function initSceneGraph(scene: Scenegraph) {
  const width = scene._gantt.tableNoFrameWidth;
  const height = scene._gantt.tableNoFrameHeight;

  scene.tableGroup = new Group({ x: 0, y: 0, width, height, clip: true, pickable: false });
  scene.tableGroup.role = 'table';

  const dateHeader = createContainerGroup(0, 0, true);
  dateHeader.role = 'date-header';
  scene.dateHeader = dateHeader;

  scene.tableGroup.addChild(dateHeader);
}

export function createContainerGroup(width: number, height: number, clip?: boolean) {
  return new Group({
    x: 0,
    y: 0,
    width,
    height,
    clip: clip ?? false,
    pickable: false
  });
}
