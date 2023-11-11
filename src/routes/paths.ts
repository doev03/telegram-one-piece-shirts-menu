export const paths : Record<string, AppRoute> = {
  '/': {
    path: '/'
  }
};

interface AppRoute {
  path: string,
}

interface MainButtonParams {
  text: string,
  isVisible: boolean, 
}