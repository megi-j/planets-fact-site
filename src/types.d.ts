export type dataType = {
  name: string;
  color: string;
  geology: {
    content: string;
    source: string;
  };
  overview: {
    content: string;
    source: string;
  };
  radius: string;
  revolution: string;
  rotation: string;
  structure: {
    content: string;
    source: string;
  };
  temperature: string;
};

export type PlanetPageProps = {
  planetName: string;
  isBurgerClicked: boolean;
  info: [];
  handleClick: (name: string) => void;
  burgerClicked: () => void;
  clickButton: (name: string) => void;
  selectButton: string;
  color: string;
  planetText: string | undefined;
  textSource: string | undefined;
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  averageTemp: string;
};
export type PlanetBurgerBoxesType = {
  color: string;
  name: string;
  isBurgerClicked: boolean;
  handleClick: (name: string) => void;
  burgerClicked: () => void;
};
