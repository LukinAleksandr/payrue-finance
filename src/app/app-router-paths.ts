import { generatePath } from "react-router-dom";

export enum PathsMap {
  NOT_FOUND = "*",
  INTRO = "/",
  ABOUT = "/about",
  PROPEL = "/propel",
  SWAP = "/swap",
  STAKING = "/staking",
  PROFILE = "/profile",
}

export const getNotFoundPath = () =>
  generatePath(PathsMap.NOT_FOUND);

export const getIntroPath = () =>
  generatePath(PathsMap.INTRO);

export const getAboutPath = () =>
  generatePath(PathsMap.ABOUT);

export const getPropelPath = () =>
  generatePath(PathsMap.PROPEL);

export const getSwapPath = () =>
  generatePath(PathsMap.SWAP);

export const getStakingPath = () =>
  generatePath(PathsMap.STAKING);

export const getProfilePath = () =>
  generatePath(PathsMap.PROFILE);
