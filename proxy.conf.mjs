export default [
    {
      context: [
          '/rooms',
          '/api',
          '/cats',
          '/i',
          '/need',
          '/to',
          '/proxy'
      ],
      target: 'http://localhost:3000',
      secure: false
    }
  ];