declare module "commons/Components/Card" {
  const Card: React.FC<{
    name?: string;
    backgroundColor?: string;
  }>;

  export default Card;
}

declare module "commons/Utils" {
  const DataUtils: {
    toSnakeCase: Function;
  };

  const CountryUtils: {
    [key: string]: any;
  };

  export { DataUtils, CountryUtils };
}

declare module "commons/Constants" {
  const Country: {
    [key: string]: any;
  };

  export { Country };
}

declare module "commons/Contexts/auth" {
  const AuthProvider: React.FC;

  type AuthContextInterface = {
    isAuthenticated: boolean;
    scopes: {
      [key: string]: boolean;
    };
    handleLogout: Function;
  };

  const useAuth: () => AuthContextInterface;

  const COOKIE_ACCESS_TOKEN: string;

  export default AuthProvider;
  export { useAuth, COOKIE_ACCESS_TOKEN };
}
