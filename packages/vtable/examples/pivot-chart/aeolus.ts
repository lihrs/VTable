/* eslint-disable */
import * as VTable from '../../src';
import VChart from '@visactor/vchart';
import { bindDebugTool } from '../../src/scenegraph/debug-tool';

const CONTAINER_ID = 'vTable';
VTable.register.chartModule('vchart', VChart);
export function createTable() {
  const option = {
    widthMode: 'adaptive',
    heightMode: 'adaptive',
    columnTree: [
      {
        dimensionKey: '230908153425016',
        value: '公司',
        children: [
          {
            dimensionKey: '230908153039050',
            value: '销售额-存在空',
            indicatorKey: '230908153039050'
          }
        ]
      },
      {
        dimensionKey: '230908153425016',
        value: '小型企业',
        children: [
          {
            dimensionKey: '230908153039050',
            value: '销售额-存在空',
            indicatorKey: '230908153039050'
          }
        ]
      },
      {
        dimensionKey: '230908153425016',
        value: '消费者',
        children: [
          {
            dimensionKey: '230908153039050',
            value: '销售额-存在空',
            indicatorKey: '230908153039050'
          }
        ]
      }
    ],
    rowTree: [
      {
        dimensionKey: 0,
        value: ''
      }
    ],
    columns: [
      {
        dimensionKey: '230908153425016',
        title: '细分'
      }
    ],
    rows: [],
    axes: [
      {
        type: 'band',
        tick: {
          visible: false
        },
        grid: {
          visible: false,
          style: {
            stroke: '#DADCDD',
            lineWidth: 1,
            lineDash: [4, 2]
          }
        },
        orient: 'bottom',
        visible: true,
        domainLine: {
          visible: true,
          style: {
            lineWidth: 1,
            stroke: '#989999'
          }
        },
        title: {
          visible: false,
          space: 5,
          text: '地区',
          style: {
            fontSize: 12,
            fill: '#363839',
            fontWeight: 'normal'
          }
        },
        sampling: false,
        label: {
          visible: true,
          space: 4,
          style: {
            fontSize: 12,
            fill: '#6F6F6F',
            angle: 0,
            fontWeight: 'normal'
          },
          autoHide: true,
          autoHideMethod: 'greedy',
          flush: true
        },
        hover: true,
        background: {
          visible: false,
          state: {
            hover: {
              fillOpacity: 0.08,
              fill: '#141414'
            }
          }
        },
        paddingInner: [0.15, 0.1],
        paddingOuter: [0.075, 0.075]
      },
      {
        type: 'linear',
        tick: {
          visible: false,
          style: {
            stroke: 'rgba(255, 255, 255, 0)'
          }
        },
        niceType: 'accurateFirst',
        grid: {
          visible: true,
          style: {
            stroke: '#DADCDD',
            lineWidth: 1,
            lineDash: [4, 2]
          }
        },
        orient: 'left',
        visible: true,
        domainLine: {
          visible: true,
          style: {
            lineWidth: 1,
            stroke: 'rgba(255, 255, 255, 0)'
          }
        },
        title: {
          visible: false,
          text: '销售额-存在空',
          space: 8,
          style: {
            fontSize: 12,
            fill: '#363839',
            fontWeight: 'normal'
          }
        },
        sampling: false,
        label: {
          visible: true,
          space: 6,
          flush: true,
          padding: 0,
          style: {
            fontSize: 12,
            maxLineWidth: 174,
            fill: '#6F6F6F',
            angle: 0,
            fontWeight: 'normal',
            dy: -1
          },
          autoHide: true,
          autoHideMethod: 'greedy'
        },
        hover: true,
        background: {
          visible: true,
          state: {
            hover: {
              fillOpacity: 0.08,
              fill: '#141414'
            }
          }
        },
        zero: true,
        nice: true
      }
    ],
    indicators: [
      {
        indicatorKey: '10002',
        title: '',
        width: 'auto',
        cellType: 'chart',
        chartModule: 'vchart',
        style: {
          padding: [1, 1, 0, 1]
        },
        chartSpec: {
          type: 'bar',
          xField: ['230908153039053', '20001'],
          yField: ['10002'],
          direction: 'vertical',
          seriesField: '20001',
          padding: 0,
          data: {
            id: 'data'
          },
          axes: [
            {
              type: 'band',
              tick: {
                visible: false
              },
              grid: {
                visible: false,
                style: {
                  stroke: '#DADCDD',
                  lineWidth: 1,
                  lineDash: [4, 2]
                }
              },
              orient: 'bottom',
              visible: true,
              domainLine: {
                visible: true,
                style: {
                  lineWidth: 1,
                  stroke: '#989999'
                }
              },
              title: {
                visible: false,
                space: 5,
                text: '地区',
                style: {
                  fontSize: 12,
                  fill: '#363839',
                  fontWeight: 'normal'
                }
              },
              sampling: false,
              label: {
                visible: true,
                space: 4,
                style: {
                  fontSize: 12,
                  fill: '#6F6F6F',
                  angle: 0,
                  fontWeight: 'normal'
                },
                autoHide: true,
                autoHideMethod: 'greedy',
                flush: true
              },
              hover: false,
              background: {
                visible: false,
                state: {
                  hover: {
                    fillOpacity: 0.08,
                    fill: '#141414'
                  }
                }
              },
              paddingInner: [0.15, 0.1],
              paddingOuter: [0.075, 0.075]
            },
            {
              type: 'linear',
              tick: {
                visible: false,
                style: {
                  stroke: 'rgba(255, 255, 255, 0)'
                }
              },
              niceType: 'accurateFirst',
              grid: {
                visible: true,
                style: {
                  stroke: '#DADCDD',
                  lineWidth: 1,
                  lineDash: [4, 2]
                }
              },
              orient: 'left',
              visible: true,
              domainLine: {
                visible: true,
                style: {
                  lineWidth: 1,
                  stroke: 'rgba(255, 255, 255, 0)'
                }
              },
              title: {
                visible: false,
                text: '销售额-存在空',
                space: 8,
                style: {
                  fontSize: 12,
                  fill: '#363839',
                  fontWeight: 'normal'
                }
              },
              sampling: false,
              label: {
                visible: true,
                space: 6,
                flush: true,
                padding: 0,
                style: {
                  fontSize: 12,
                  maxLineWidth: 174,
                  fill: '#6F6F6F',
                  angle: 0,
                  fontWeight: 'normal',
                  dy: -1
                },
                autoHide: true,
                autoHideMethod: 'greedy'
              },
              hover: false,
              background: {
                visible: true,
                state: {
                  hover: {
                    fillOpacity: 0.08,
                    fill: '#141414'
                  }
                }
              },
              zero: true,
              nice: true
            }
          ],
          color: {
            field: '20001',
            type: 'ordinal',
            range: ['#2E62F1'],
            specified: {},
            domain: ['销售额-存在空']
          },
          label: {
            visible: false,
            overlap: {
              hideOnHit: true,
              clampForce: true
            },
            style: {
              fontSize: 12,
              fontWeight: 'normal',
              fill: '#363839',
              stroke: 'rgba(255, 255, 255, 0.8)',
              lineWidth: 2,
              strokeOpacity: 1
            },
            position: 'outside',
            smartInvert: false
          },
          tooltip: {
            handler: {}
          },
          hover: {
            enable: true
          },
          select: {
            enable: true
          },
          bar: {
            state: {
              hover: {
                cursor: 'pointer',
                fillOpacity: 0.8,
                stroke: '#58595B',
                lineWidth: 1,
                zIndex: 500
              },
              selected: {
                cursor: 'pointer',
                fillOpacity: 1,
                stroke: '#58595B',
                lineWidth: 1
              },
              selected_reverse: {
                fillOpacity: 0.3,
                strokeWidth: 0.3
              }
            }
          },
          background: 'rgba(255, 255, 255, 0)',
          markLine: [
            {
              y: (data: any) => {
                return 10000;
              },
              startSymbol: {
                visible: true,
                symbolType: 'triangleDown',
                style: {
                  size: 10,
                  fill: '#f3a016'
                }
              },
              endSymbol: {
                visible: false
              },
              autoRange: true,
              label: {
                visible: true,
                style: {
                  dx: -4,
                  dy: 0,
                  fontSize: 12,
                  fontWeight: 'normal',
                  fill: '#fff',
                  cursor: 'pointer'
                },
                position: 'insideStartTop',
                labelBackground: {
                  visible: true,
                  padding: {
                    left: 5,
                    right: 5,
                    top: 2,
                    bottom: 2
                  },
                  style: {
                    fill: '#2F3B52',
                    fillOpacity: 0.9,
                    dx: -4,
                    dy: 0
                  }
                }
              },
              line: {
                style: {
                  stroke: '#f3a016',
                  lineWidth: 2,
                  lineDash: [3, 3],
                  cursor: 'pointer'
                }
              },
              relativeSeriesId: 'mainSeries',
              id: '7d14708c-de9d-49a1-919a-26c65ff95b42',
              interactive: true
            }
          ],
          animation: false
        }
      }
    ],
    indicatorsAsCol: false,
    records: [
      {
        '10001': '销售额-存在空',
        '10002': '469341.68548202515',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '469341.68548202515',
        '230908153039053': '西南',
        '230908153425016': '公司'
      },
      {
        '10001': '销售额-存在空',
        '10002': '1335665.32513237',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '1335665.32513237',
        '230908153039053': '中南',
        '230908153425016': '公司'
      },
      {
        '10001': '销售额-存在空',
        '10002': '253458.18463516235',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '253458.18463516235',
        '230908153039053': '西北',
        '230908153425016': '公司'
      },
      {
        '10001': '销售额-存在空',
        '10002': '804769.4678850174',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '804769.4678850174',
        '230908153039053': '华北',
        '230908153425016': '公司'
      },
      {
        '10001': '销售额-存在空',
        '10002': null,
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': null,
        '230908153039053': '华东',
        '230908153425016': '公司'
      },
      {
        '10001': '销售额-存在空',
        '10002': '834842.828546524',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '834842.828546524',
        '230908153039053': '地区-dongbei',
        '230908153425016': '公司'
      },
      {
        '10001': '销售额-存在空',
        '10002': '522739.03513240814',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '522739.03513240814',
        '230908153039053': '地区-dongbei',
        '230908153425016': '小型企业'
      },
      {
        '10001': '销售额-存在空',
        '10002': '743813.0075492859',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '743813.0075492859',
        '230908153039053': '中南',
        '230908153425016': '小型企业'
      },
      {
        '10001': '销售额-存在空',
        '10002': '103523.30778121948',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '103523.30778121948',
        '230908153039053': '西北',
        '230908153425016': '小型企业'
      },
      {
        '10001': '销售额-存在空',
        '10002': null,
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': null,
        '230908153039053': '华东',
        '230908153425016': '小型企业'
      },
      {
        '10001': '销售额-存在空',
        '10002': '422100.9874534607',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '422100.9874534607',
        '230908153039053': '华北',
        '230908153425016': '小型企业'
      },
      {
        '10001': '销售额-存在空',
        '10002': '156479.9320793152',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '156479.9320793152',
        '230908153039053': '西南',
        '230908153425016': '小型企业'
      },
      {
        '10001': '销售额-存在空',
        '10002': '2057936.7624292374',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '2057936.7624292374',
        '230908153039053': '中南',
        '230908153425016': '消费者'
      },
      {
        '10001': '销售额-存在空',
        '10002': '677302.8914031982',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '677302.8914031982',
        '230908153039053': '西南',
        '230908153425016': '消费者'
      },
      {
        '10001': '销售额-存在空',
        '10002': null,
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': null,
        '230908153039053': '华东',
        '230908153425016': '消费者'
      },
      {
        '10001': '销售额-存在空',
        '10002': '458058.10551834106',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '458058.10551834106',
        '230908153039053': '西北',
        '230908153425016': '消费者'
      },
      {
        '10001': '销售额-存在空',
        '10002': '1323985.6108589172',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '1323985.6108589172',
        '230908153039053': '地区-dongbei',
        '230908153425016': '消费者'
      },
      {
        '10001': '销售额-存在空',
        '10002': '1220430.5587997437',
        '10003': '230908153039050',
        '20001': '销售额-存在空',
        '230908153039050': '1220430.5587997437',
        '230908153039053': '华北',
        '230908153425016': '消费者'
      }
    ],
    defaultHeaderRowHeight: 18,
    defaultHeaderColWidth: ['auto'],
    indicatorTitle: '',
    autoWrapText: true,
    legends: {
      type: 'discrete',
      id: 'legend',
      orient: 'bottom',
      position: 'middle',
      layoutType: 'normal',
      visible: true,
      maxRow: 1,
      title: {
        textStyle: {
          fontSize: 12,
          fill: '#6F6F6F'
        }
      },
      layoutLevel: 50,
      item: {
        focus: true,
        focusIconStyle: {
          size: 14
        },
        maxWidth: 400,
        spaceRow: 0,
        spaceCol: 0,
        padding: {
          top: 1,
          bottom: 1,
          left: 1,
          right: 1
        },
        background: {
          visible: false,
          style: {
            fillOpacity: 0.001
          }
        },
        label: {
          style: {
            fontSize: 12,
            fill: '#6F6F6F'
          }
        },
        shape: {
          style: {
            lineWidth: 0,
            symbolType: 'square'
          }
        }
      },
      pager: {
        layout: 'horizontal',
        padding: 0,
        textStyle: {},
        space: 0,
        handler: {
          preShape: 'triangleLeft',
          nextShape: 'triangleRight',
          style: {},
          state: {
            disable: {}
          }
        }
      },
      padding: [16, 0, 0, 0],
      data: [
        {
          label: '销售额-存在空',
          shape: {
            fill: '#2E62F1',
            symbolType: 'square'
          }
        }
      ]
    },
    corner: {
      titleOnDimension: 'row'
    },
    title: {
      text: '细分',
      align: 'center',
      orient: 'top',
      padding: [3, 0, 5, 0],
      textStyle: {
        fontSize: 12,
        fill: '#333333',
        fontWeight: 'bold'
      }
    },
    theme: {
      bodyStyle: {
        borderColor: 'rgba(0,4,20,0.2)',
        borderLineWidth: [1, 0, 0, 1],
        padding: 1
      },
      headerStyle: {
        borderColor: 'rgba(0,4,20,0.2)',
        fontSize: 12,
        color: '#333333',
        textAlign: 'center',
        borderLineWidth: [0, 0, 1, 1],
        padding: [4, 0, 4, 0],
        hover: {
          cellBgColor: 'rgba(20, 20, 20, 0.08)'
        }
      },
      rowHeaderStyle: {
        borderColor: 'rgba(0,4,20,0.2)',
        fontSize: 12,
        color: '#333333',
        padding: [0, 0, 0, 4],
        borderLineWidth: [1, 1, 0, 0],
        hover: {
          cellBgColor: 'rgba(20, 20, 20, 0.08)'
        }
      },
      cornerHeaderStyle: {
        borderColor: 'rgba(0,4,20,0.2)',
        textAlign: 'center',
        fontSize: 12,
        color: '#333333',
        fontWeight: 'bold',
        borderLineWidth: [0, 1, 1, 0],
        padding: 0,
        hover: {
          cellBgColor: ''
        }
      },
      cornerRightTopCellStyle: {
        borderColor: 'rgba(0,4,20,0.2)',
        borderLineWidth: [0, 0, 1, 1],
        padding: 0,
        hover: {
          cellBgColor: ''
        }
      },
      cornerLeftBottomCellStyle: {
        borderColor: 'rgba(0,4,20,0.2)',
        borderLineWidth: [1, 1, 0, 0],
        hover: {
          cellBgColor: ''
        }
      },
      cornerRightBottomCellStyle: {
        borderColor: 'rgba(0,4,20,0.2)',
        borderLineWidth: [1, 0, 0, 1],
        hover: {
          cellBgColor: ''
        }
      },
      rightFrozenStyle: {
        borderColor: 'borderColor',
        borderLineWidth: [1, 0, 1, 1],
        hover: {
          cellBgColor: 'rgba(20, 20, 20, 0.08)'
        }
      },
      bottomFrozenStyle: {
        borderColor: 'rgba(0,4,20,0.2)',
        borderLineWidth: [1, 0, 0, 1],
        padding: 0,
        hover: {
          cellBgColor: 'rgba(20, 20, 20, 0.08)'
        }
      },
      selectionStyle: {
        cellBgColor: '',
        cellBorderColor: ''
      },
      frameStyle: {
        borderLineWidth: 0
      }
    },
    hash: '9b9c0b8bfd9f6f6d174b6fff4d050e58'
  };

  const tableInstance = new VTable.PivotChart(document.getElementById(CONTAINER_ID), option);
  // tableInstance.listenChart('click', args => {
  //   console.log('listenChart click', args);
  // });
  // tableInstance.listenChart('mouseover', args => {
  //   console.log('listenChart mouseover', args);
  // });
  window.tableInstance = tableInstance;

  bindDebugTool(tableInstance.scenegraph.stage, {});
}
