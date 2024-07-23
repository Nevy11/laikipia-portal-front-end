/** Example file/folder data. */
export const files = [
  {
    name: 'Student info',
    type: 'folder',
    children: [
      {
        name: 'id',
        type: 'folder',
        children: [
          {
            name: 'school id',
            type: 'folder',
            children: [
              { name: 'schoolId.pdf', type: 'file' },
              // { name: 'schoolCard.pdf', type: 'file' },
            ],
          },
          {
            name: 'national id',
            type: 'folder',
            children: [
              {
                name: 'nationalId.pdf',
                type: 'file',
              },
            ],
          },
          {
            name: 'birth certificate',
            type: 'folder',
            children: [
              {
                name: 'birthCertificate',
                type: 'file',
              },
            ],
          },
        ],
      },
      {
        name: 'certificates',
        type: 'folder',
        children: [],
      },
    ],
  },
  {
    name: 'Fees',
    type: 'folder',
    children: [
      {
        name: 'fee statement',
        type: 'folder',
        children: [{ name: 'feeStatement.pdf', type: 'file' }],
      },
      {
        name: 'fee Structure',
        type: 'folder',
        children: [
          {
            name: 'feeStructure',
            type: 'file',
          },
        ],
      },
    ],
  },
  {
    name: 'Academics',
    type: 'folder',
    children: [
      {
        name: 'Exam Card',
        type: 'folder',
        children: [
          {
            name: 'ExamCard.pdf',
            type: 'file',
          },
        ],
      },
      {
        name: 'Result Slip',
        type: 'folder',
        children: [
          {
            name: 'resultSlip.pdf',
            type: 'file',
          },
        ],
      },
    ],
  },
];
