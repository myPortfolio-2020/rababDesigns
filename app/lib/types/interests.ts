// /types/interests.ts

export interface Interest {
  interestId: string; // e.g., "int-01"
  titleNum: string;
  title: string; // e.g., "UI/UX Design"
  description: string; // Detailed description of the interest
  colorCode: string; // Hex color code for UI display, e.g., "#FF6B6B"
}

export interface InterestsData {
  interests: Interest[];
}
