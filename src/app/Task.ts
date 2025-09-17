export interface Task {
  id?: string;  // Use string to match Firestore document IDs
  text: string;
  day: string;
  reminder: boolean;
}