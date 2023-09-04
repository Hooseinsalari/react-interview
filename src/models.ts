export interface Data {
  id: number;
  title: string;
  year: number;
  rating: number;
  director: string;
  genre?: Genre[];
}

export interface FormData {
  title: string | undefined;
  year: number | undefined;
  rating: number | undefined;
  director: string | undefined;
  genre: Genre[] | undefined
}

export interface Genre {
  name: string;
}

export interface OptionFormProps {
  options: Genre[] | undefined;
  setOptions: React.Dispatch<React.SetStateAction<Genre[] | undefined>>
}
