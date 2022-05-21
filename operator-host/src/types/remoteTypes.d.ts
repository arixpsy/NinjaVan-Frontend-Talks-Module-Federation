declare module 'commons/Components/Card' {
  const Card: React.FC<{
    name: string
  }>;

  export default Card
}

declare module 'commons/Utils' {
  const DataUtils: {
    toSnakeCase: Function
  }

  const CountryUtils: {

  }

  export {
    DataUtils,
    CountryUtils,
  }
}