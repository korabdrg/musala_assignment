interface DarkMode {
  color: boolean;
}

type DarkModeColor = {
  isDark: DarkMode;
};

type DarkModeChange = {
  type: string;
  color: string;
};

type DispatchType = (
  arg1: DarkModeChange,
  arg2: DarkModeColor,
) => DarkModeChange;
