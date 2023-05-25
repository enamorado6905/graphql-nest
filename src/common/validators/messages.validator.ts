export const messageValidator = {
  formMessage: {},

  actionMessage: {},

  systemMessages: {},

  getMinLength(min: number) {
    return this.formMessages.minLength + min;
  },
  getMaxLength(max: number) {
    return this.formMessages.maxLength + max;
  },
  getMaxFileSize(max: number) {
    return this.formMessages.maxFileSize + max + 'MB';
  },
  getExtensionsAllowed(extensions: string) {
    return this.formMessages.extensionsAllowedFile + extensions;
  },
  getUniqueMessage(entityName?: string, message?: string) {
    return message ? message : `${entityName} bd`;
  },
};
