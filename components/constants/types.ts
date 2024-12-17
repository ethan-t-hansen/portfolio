export type ImageFillProps = {
    className?: string,
    src: string,
}

// Define interfaces for type safety
export interface Experience {
    company: string;
    position: string;
    date: string;
    description: string;
    logo: string;
    tabImage: string;
}
  
export interface ExperiencesCategories {
    [category: string]: Experience[];
}
  
  