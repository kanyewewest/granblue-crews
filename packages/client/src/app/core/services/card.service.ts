import { Observable } from 'rxjs';
import { Card } from '@gbc/models/card';
import { Paginated } from '@gbc/models/pagination';

export abstract class CardService {
  getCards: (page: number) => Observable<Paginated<Card>>;
}
