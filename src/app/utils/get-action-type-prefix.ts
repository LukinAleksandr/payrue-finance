import { Feature } from "../../features/types";

export default function getActionTypePrefix<
  T extends string
>(feature: Feature | string, action: T): string {
  return `${feature}/${action}`;
}
