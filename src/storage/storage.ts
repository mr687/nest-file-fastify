import type { FastifyRequest } from "fastify";
import { MultipartFile } from "../multipart/file";

export interface StorageFile {
  size: number;
  fieldname: string;
  encoding: string;
  mimetype: string;
  originalFilename: string;
}

export interface Storage<T extends StorageFile = StorageFile, K = any> {
  handleFile: (file: MultipartFile, req: FastifyRequest) => Promise<T>;
  removeFile: (file: T, force?: boolean) => Promise<void> | void;
  options?: K;
}
