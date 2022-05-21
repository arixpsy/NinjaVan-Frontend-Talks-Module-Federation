import { camelCase, snakeCase, mapKeys, mapValues } from "lodash";

const mapper = (value: any, transformCase: Function) =>
  typeof value === "object" && value !== null
    ? toAnyCase(value, transformCase)
    : value;

const toAnyCase = (data: any, transformCase: Function) => {
  const mapperValues = (value: any) => mapper(value, transformCase);
  if (Array.isArray(data)) {
    return data.map(mapValues);
  } else if (typeof data === "object" && data !== null) {
    return mapKeys(mapValues(data, mapperValues), (_, key) =>
      transformCase(key)
    );
  }
};

const toSnakeCase = (data: any) => toAnyCase(data, snakeCase);

const toCamelCase = (data: any) => toAnyCase(data, camelCase);

export default {
  toSnakeCase,
  toCamelCase,
};
