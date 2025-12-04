// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   myRole: string;
//   timeline: Timeline;
//   timelineNotes: string[];
//   tools: string[];
//   problems: string[];
//   goal: string;
//   persona: Persona;
//   wireframes: string[];
//   styleGuide: StyleGuide;
//   finalDesign: string[];
//   sketchImages: string[];
// }

// export interface Timeline {
//   start: string; // YYYY-MM
//   end: string; // YYYY-MM
// }

// export interface Persona {
//   name: string;
//   age: number;
//   occupation: string;
//   painPoints: string[];
//   needs: string[];
// }

// export interface StyleGuide {
//   colors: string[];
//   typography: Typography;
//   components: string[];
// }

// export interface Typography {
//   heading: string;
//   body: string;
// }

// export interface ProjectsData {
//   projects: Project[];
// }
export interface Project {
  id: string;
  title: string;
  description: string;
  myRole: string[];
  timeline: Timeline;
  timelineNotes: string[];
  tools: string[];
  problems: string[];
  goal: string;
  persona: Persona;
  wireframes: string[];
  styleGuide: StyleGuide;
  finalDesign: string[];
  sketchImages: string[];
}

export interface Timeline {
  start: string; // YYYY-MM
  end: string; // YYYY-MM
}

export interface Persona {
  name: string;
  age: number;
  occupation: string;
  painPoints: string[];
  needs: string[];
}

export interface StyleGuide {
  colors: {
    primary: string[];
    secondary: string[];
  };
  typography: Typography;
  components: string[];
}

export interface Typography {
  heading: string;
  body: string;
}

export interface ProjectsData {
  projects: Project[];
}
