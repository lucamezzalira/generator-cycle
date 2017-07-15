import xs from 'xstream';
import {run} from '@cycle/run';
import {makeDOMDriver, h1} from '@cycle/dom'

const main = sources => {
    const sinks = {
        DOM: xs.periodic(1000).take(2).map(v => h1(`hello world ${v}`))
    }
    return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);