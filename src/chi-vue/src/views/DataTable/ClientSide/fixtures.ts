export const exampleConfig = {
  columnResize: true,
  noResultsMessage: 'No matches found. Please revise search criteria and try again.',
  style: {
    portal: true,
    noBorder: false,
    bordered: false,
    hover: false,
    size: 'lg',
    striped: true,
  },
  pagination: {
    activePage: 1,
    hideOnSinglePage: true,
    compact: true,
    firstLast: true,
    pageJumper: true,
  },
  selectable: true,
  columnSizes: {
    xs: [5, 5, 5, 0, 5, 5, 5, 5],
    sm: [10, 10, 10, 0, 10, 10, 10, 5],
    md: [15, 5, 15, 0, 15, 15, 15, 5],
    lg: [15, 5, 15, 0, 15, 15, 15, 5],
    xl: [15, 5, 10, 15, 15, 15, 15, 5],
  },
  resultsPerPage: 10,
  defaultSort: {
    key: 'ticketId',
    sortBy: 'id',
    direction: 'ascending',
  },
  truncation: true,
};

const exampleColumns = [
  {
    name: 'columnA',
    label: 'Column A',
  },
  {
    name: 'columnB',
    label: 'Column B',
  },
  {
    name: 'columnC',
    label: 'Column C',
    locked: true,
    selected: true,
  },
  {
    name: 'columnD',
    label: 'Column D',
    locked: true,
    selected: true,
  },
  {
    name: 'columnE',
    label: 'Column E',
    selected: true,
  },
  {
    name: 'columnF',
    label: 'Column F',
    selected: true,
  },
  {
    name: 'columnG',
    label: 'Column G',
  },
  {
    name: 'columnH',
    label: 'Column H',
  },
  {
    name: 'columnI',
    label: 'Column I',
  },
  {
    name: 'columnJ',
    label: 'Column J',
  },
];

const exampleFilters = [
  {
    name: 'status',
    type: 'select',
    id: 'myoption1',
    label: 'Selector',
    options: [
      {
        label: 'Active',
        value: 'active',
      },
      {
        label: 'Inactive',
        value: 'inactive',
      },
    ],
    value: 'active',
  },
  {
    name: 'input',
    placeholder: 'Input filter',
    type: 'input',
    value: '',
    id: 'myoption2',
    label: 'Input Filter',
  },
  {
    name: 'checkbox',
    type: 'checkbox',
    checked: false,
    id: 'myoption3',
    label: 'Checkbox',
  },
  {
    name: 'statusAdvanced',
    label: 'Status',
    type: 'select',
    id: 'myoption4',
    options: [
      {
        label: 'Active',
        value: 'active',
        selected: false,
      },
      {
        label: 'Inactive',
        value: 'inactive',
        selected: false,
      },
    ],
    advanced: true,
    value: 'active',
  },
  {
    name: 'inputAdvanced',
    label: 'Label',
    id: 'myoption5',
    advanced: true,
  },
  {
    name: 'textareaAdvanced',
    label: 'textarea',
    id: 'myoption6',
    type: 'textarea',
    advanced: true,
  },
  {
    name: 'checkboxAdvanced',
    id: 'myoption7',
    label: 'Advanced Checkbox',
    type: 'checkbox',
    advanced: true,
  },
  {
    name: 'input',
    placeholder: 'Input filter',
    type: 'input',
    value: '',
    id: 'myoption8',
    label: 'Input',
    advanced: true,
  },
];

const customItems = [
  {
    template: 'customAdvanced',
    label: 'Custom 1',
  },
  {
    template: 'customAdvanced2',
    label: 'Custom 2',
  },
  {
    template: 'customAdvanced3',
    label: 'Custom 3',
  },
  {
    template: 'customAdvanced4',
    label: 'Custom 4',
  },
  {
    template: 'customAdvanced5',
    label: 'Custom 5',
  },
];

export const exampleToolbar = {
  customItems: customItems,
  filtersData: exampleFilters,
  columnsData: {
    columns: exampleColumns,
  },
  viewsData: [
    {
      id: 'view-1',
      label: 'View 1',
      columns: exampleColumns,
      searchString: 'abc',
      filters: exampleFilters,
    },
    {
      id: 'view-2',
      label: 'View 2',
      columns: [],
      searchString: 'abcde',
      filters: [],
    },
  ],
};

export const exampleTableHead = {
  ticketId: {
    label: 'Ticket ID',
    sortable: true,
    sortBy: 'id',
    sortDataType: 'string',
    key: true,
    bold: true,
    description: { title: 'Ticket ID', text: 'This is content for ticket id' },
  },
  alerts: {
    label: 'Alerts',
    align: 'center',
    description: {
      template: 'alertsDesc',
      payload: {
        success: { icon: 'circle-check', color: 'success' },
        warning: { icon: 'warning', color: 'warning' },
      },
    },
  },
  status: {
    label: 'Status',
    sortable: true,
    sortBy: 'status',
    sortDataType: 'string',
    align: 'center',
  },
  string: { label: 'String', sortable: true, sortDataType: 'string', key: true },
  number: { label: 'Number', sortable: true, sortDataType: 'number' },
  date: { label: 'Date', sortable: true, sortBy: 'date', sortDataType: 'date' },
  productId: { label: 'Product / Service ID', sortable: true, sortDataType: 'string' },
  actions: { label: ' ', align: 'right', allowOverflow: true },
};

export const exampleTableBody = [
  {
    id: 'NTM000021063',
    nestedContent: {
      template: 'loadingSkeleton',
    },
    active: false,
    selectionDisabled: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021063' } },
      {
        template: 'icon',
        payload: { icon: 'circle-check', color: 'success' },
      },
      { template: 'status', payload: { status: 'active' } },
      'Colocation A',
      0,
      { template: 'date', payload: { date: new Date('02/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021063' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021071',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021071' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation B',
      1,
      { template: 'date', payload: { date: new Date('03/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021071' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021064',
    active: false,
    nestedContent: {
      value: 'asdasdasd',
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021064' } },
      '',
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation B',
      2,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021064' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021065',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021065' } },
      {
        label: 'Alert Column',
        template: 'icon',
        payload: { icon: 'warning', color: 'warning' },
      },
      { template: 'status', payload: { status: 'active' } },
      'Colocation C',
      3,
      { template: 'date', payload: { date: new Date('05/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021065' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021066',
    active: false,
    nestedContent: {
      template: 'accordionContent',
      payload: {
        id: 'NTM000021066',
      },
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021066' } },
      '',
      { template: 'status', payload: { status: 'active' } },
      'Colocation a',
      4,
      { template: 'date', payload: { date: new Date('06/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021066' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM0000210662',
    active: false,
    nestedContent: {
      table: {
        data: [
          {
            id: 'NTM0000210661',
            active: false,
            data: [
              {
                template: 'ticketId',
                payload: { id: 'NTM0000210661' },
              },
              {
                label: 'Alerts',
                template: 'icon',
                payload: { icon: 'circle-check', color: 'success' },
              },
              {
                template: 'status',
                payload: { status: 'active' },
                align: 'center',
              },
              'Colocation',
              5,
              { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM0000210661' },
                align: 'right',
              },
            ],
          },
          {
            id: 'NTM00002106611',
            active: false,
            nestedContent: {
              table: {
                data: [
                  {
                    id: 'a',
                    active: false,
                    data: [
                      {
                        template: 'ticketId',
                        payload: { id: 'NTM0000210661' },
                      },
                      {
                        label: 'Alerts',
                        template: 'icon',
                        payload: {
                          icon: 'circle-check',
                          color: 'success',
                        },
                      },
                      {
                        template: 'status',
                        payload: { status: 'active' },
                        align: 'center',
                      },
                      'Colocation',
                      6,
                      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
                      'SVUJW034781A',
                      {
                        template: 'actions',
                        payload: { id: 'NTM0000210661' },
                        align: 'right',
                      },
                    ],
                  },
                  {
                    id: 'bbb',
                    active: false,
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'ba',
                            active: false,
                            data: [
                              {
                                template: 'ticketId',
                                payload: { id: 'NTM00002106611' },
                              },
                              {
                                label: 'Alerts',
                                template: 'icon',
                                payload: {
                                  icon: 'circle-check',
                                  color: 'success',
                                },
                              },
                              {
                                template: 'status',
                                payload: { status: 'active' },
                                align: 'center',
                              },
                              'Colocation',
                              7,
                              { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
                              'SVUJW034781A',
                              {
                                template: 'actions',
                                payload: { id: 'NTM00002106611' },
                                align: 'right',
                              },
                            ],
                          },
                          {
                            id: 'bb',
                            active: false,
                            data: [
                              {
                                template: 'ticketId',
                                payload: { id: 'NTM00002106621' },
                              },
                              {
                                label: 'Alerts',
                                template: 'icon',
                                payload: {
                                  icon: 'circle-check',
                                  color: 'success',
                                },
                              },
                              {
                                template: 'status',
                                payload: { status: 'active' },
                                align: 'center',
                              },
                              'Colocation',
                              8,
                              { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
                              'SVUJW034781A',
                              {
                                template: 'actions',
                                payload: { id: 'NTM00002106621' },
                                align: 'right',
                              },
                            ],
                          },
                        ],
                      },
                    },
                    data: [
                      {
                        template: 'ticketId',
                        payload: { id: 'NTM0000210662' },
                      },
                      {
                        label: 'Alerts',
                        template: 'icon',
                        payload: {
                          icon: 'circle-check',
                          color: 'success',
                        },
                      },
                      {
                        template: 'status',
                        payload: { status: 'active' },
                        align: 'center',
                      },
                      'Colocation',
                      9,
                      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
                      'SVUJW034781A',
                      {
                        template: 'actions',
                        payload: { id: 'NTM0000210662' },
                        align: 'right',
                      },
                    ],
                  },
                ],
              },
            },
            data: [
              {
                template: 'ticketId',
                payload: { id: 'NTM0000210662' },
              },
              {
                label: 'Alerts',
                template: 'icon',
                payload: { icon: 'circle-check', color: 'success' },
              },
              {
                template: 'status',
                payload: { status: 'active' },
                align: 'center',
              },
              'Colocation',
              10,
              { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM0000210662' },
                align: 'right',
              },
            ],
          },
        ],
      },
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021067' } },
      '',
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation b',
      11,
      { template: 'date', payload: { date: new Date('07/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021067' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021072',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021072' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation c',
      12,
      { template: 'date', payload: { date: new Date('01/06/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021072' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM0000210651',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM0000210651' } },
      {
        label: 'Alerts',
        template: 'icon',
        payload: { icon: 'warning', color: 'warning' },
      },
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      13,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM0000210651' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021068',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021068' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      14,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021068' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021069',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021069' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      15,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021069' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021070',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021070' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      16,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021070' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021073',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021073' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      17,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021073' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021074',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021074' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      18,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021074' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021075',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021075' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      19,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021075' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021076',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021076' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      20,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021076' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021077',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021077' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      21,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021077' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021078',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021078' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      22,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021078' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021079',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021079' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      23,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021079' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021080',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021080' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      24,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021080' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021081',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021081' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      25,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021081' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021082',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021082' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      26,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021082' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021083',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021083' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      27,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021083' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021084',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021084' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      28,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021084' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021085',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021085' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      29,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021085' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021086',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021086' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      30,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021086' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021087',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021087' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      31,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021087' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021088',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021088' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      32,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021088' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021089',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021089' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      33,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021089' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021090',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021090' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      34,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021090' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021091',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021091' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      35,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021091' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021092',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021092' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      36,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021092' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021093',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021093' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      37,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021093' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021094',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021094' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      38,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021094' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021095',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021095' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      39,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021095' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021096',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021096' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      40,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021096' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021097',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021097' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      41,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021097' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021098',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021098' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      42,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021098' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021099',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021099' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      43,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021099' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021100',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021100' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      44,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021100' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021101',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021101' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      -0.5,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021101' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTM000021102',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021102' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      -1,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTM000021102' },
        align: 'right',
      },
    ],
  },
];
