import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'displayCost' })
export class DisplayCost implements PipeTransform {
    public transform(value: number): string {
        const cost = value.toString();
        const n = cost.indexOf('.');
        const symbolAfterDot = cost.substring(n + 1);
        return symbolAfterDot.length !== 2 ? (n !== -1 ? cost + "0" : cost + ".00") : cost;
    }
}