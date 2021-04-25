import {Injectable} from '@angular/core';
import * as uuid from 'uuid';

@Injectable({ providedIn: 'root' })
export class UniqueIdService {

  private generateUniqueId(): string {
    return uuid.v1();
  }

  public generateUniqueIdPrefix(prefix: string): string {
    const uniqueId = this.generateUniqueId();
    return `${prefix}-${uniqueId}`;

  }

}
