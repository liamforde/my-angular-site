import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Fetcher, graph, sym, Namespace} from "rdflib";
import {ExtendedResponse} from "rdflib/lib/fetcher";
import {from, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class J4b2bService {
    apiUrl = 'https://raw.githubusercontent.com/redpollsolutions/j4b2b/main/schema/j4b2b.ttl';
    store = graph();
    fetcher = new Fetcher(this.store);

  constructor() { }

    getSchema(): Observable<string | undefined> {
        return from(this.fetcher.load(this.apiUrl).then(it => it as ExtendedResponse))
                     .pipe(tap(it => this.getDocuments()))
                     .pipe(map(it => it.responseText));
    }

    getDocuments() {
        var RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        var RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#");
        var J4B2B = Namespace("https://j4b2b.org/schema/");
        var XSD = Namespace("http://www.w3.org/2001/XMLSchema#");

        var subClassOf = RDFS('subClassOf');
        var document = J4B2B('Document');

        var documents = this.store.any(undefined, subClassOf, document);
        console.warn(documents);
    }
}
