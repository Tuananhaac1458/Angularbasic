import { Injectable } from '@angular/core';


@Injectable()
export class GetlistService {
    Getlist(): any[] {
        let list: any[] = [
            { id: 1, name: 'tran van 1' },
            { id: 2, name: 'tran van 2' },
            { id: 3, name: 'tran van ' },
        ];
        return list;
    }
}
