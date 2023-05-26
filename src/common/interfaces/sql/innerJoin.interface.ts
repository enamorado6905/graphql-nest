import { Repository } from 'typeorm';

export interface InnerJoinInterface {
  entity: any;
  alias: string;
  condition?: string;
  parameters?: object;
}
