var example = "138469 P10 10/07/2015 5168742327989343-0        5.92 840      128.01 D EPAY 020010000008298 DNI00002 20700B SHOP EVA-12A,DNEPROPETROVS,DNEPROPETROVS,UA";
import test from 'tape';
import process from '../app/utils/parser';

test('parser do not crash on invalid input', function (t) {
    process(1);
    process(true);
    process(null);
    process(undefined);
    process([1,2,3]);
    process({1: 2});

    t.end();
});

test('parser do not crash on invalid string', function (t) {
    process("zxxfg");
    process("djn jyf ghbikf dtcrf rfr gfhfyjz ghjpdexfk dtcys cbuyfk dctq njcrb hui");

    t.end();
});