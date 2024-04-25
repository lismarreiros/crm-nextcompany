export default {
  control: {
    backgroundColor: '#F8FAFC',
    fontSize: 14,
    color: '#64748b',
    borderRadius: 10,
    outline: 'none'
    // fontWeight: 'normal',
  },
  '&multiLine': {
    control: {
      minHeight: 10,
    },
    highlighter: {
      padding: 9,
      border: '1px solid transparent',
    },
    input: {
      padding: 9,
      border: '1px solid #DCE8ED',
      borderRadius: '8px',
      outline: 'none'
    },
  },
  '&singleLine': {
    display: 'inline-block',
    width: 180,
    highlighter: {
      padding: 1,
      border: '2px inset transparent',
    },
    input: {
      padding: 1,
      border: '2px inset',
      borderRadius: 10,
    },
  },
  suggestions: {
    list: {
      width: '200px',
      backgroundColor: 'white',
      border: '1px solid #DCE8ED',
      fontSize: 14,
      borderRadius: '5px'
    },
    item: {
      padding: '5px 15px',
      '&focused': {
        backgroundColor: '#f1f5f9',
      },
    },
  },
};
