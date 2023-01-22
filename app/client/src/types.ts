export type PackageInfo = {
  name: string;
  description: string;
  depends: string;
};

export interface packagesState {
  items: PackageInfo[];
  isLoading: boolean;
  error: boolean;
}

export type DependencyProps = {
  dependency: {
    item: string;
  };
};

export type NotFoundNotificationProps = {
  notification: {
    message?: string;
  };
};

export type HeadlineProps = {
  headline: {
    text: string;
  };
};
