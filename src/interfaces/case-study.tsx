export interface CaseCategoryInterface {
  id: number;
  created: string;
  modified: string;
  title: string;
  title_en: string;
  title_ru: string;
  active: boolean;
}
export interface CaseStudyInterface {
  id: number;
  created: string;
  modified: string;
  title: string;
  title_en: string;
  title_ru: string;
  description: string;
  description_en: string;
  description_ru: string;
  client: string;
  date: string;
  status: number;
  active: boolean;
  case_category: CaseCategoryInterface;
  images: string[];
}

export interface CaseStudyListInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: CaseStudyInterface[];
}
