const perspectiveID = 'perspective1';

export const publicationInstanceProperties = `
    {
      ?id swrc:Publication ?publication__id .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/publication/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:title ?title__id .
      OPTIONAL {
        ?title__id rdfs:label ?titleLabel .
      }
      BIND(COALESCE(?titleLabel, REPLACE(STR(?title__id), "^.*[/#]([^/#]+)$", "$1")) AS ?title__prefLabel)
    }
    UNION
    {
      ?id swrc:author ?author__id .
      OPTIONAL {
        ?author__id swrc:name ?authorLabel .
      }
      BIND(COALESCE(?authorLabel, REPLACE(STR(?author__id), "^.*[/#]([^/#]+)$", "$1")) AS ?author__prefLabel)
      BIND(CONCAT("/person/page/", REPLACE(STR(?author__id), "^.*[/#]([^/#]+)$", "$1")) AS ?author__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:editor ?editor__id .
      OPTIONAL {
        ?editor__id swrc:name ?editorLabel .
      }
      BIND(COALESCE(?editorLabel, REPLACE(STR(?editor__id), "^.*[/#]([^/#]+)$", "$1")) AS ?editor__prefLabel)
      BIND(CONCAT("/person/page/", REPLACE(STR(?editor__id), "^.*[/#]([^/#]+)$", "$1")) AS ?editor__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:chapter ?chapter__id .
      OPTIONAL {
        ?chapter__id rdfs:label ?chapterLabel .
      }
      BIND(COALESCE(?chapterLabel, REPLACE(STR(?chapter__id), "^.*[/#]([^/#]+)$", "$1")) AS ?chapter__prefLabel)
    }
    UNION
    {
      ?id swrc:booktitle ?booktitle__id .
      OPTIONAL {
        ?booktitle__id rdfs:label ?booktitleLabel .
      }
      BIND(COALESCE(?booktitleLabel,  REPLACE(STR(?booktitle__id), "^.*[/#]([^/#]+)$", "$1")) AS ?booktitle__prefLabel)
    }
    UNION
    {
      ?id swrc:journal ?journal__id .
      OPTIONAL {
        ?journal__id rdfs:label ?journalLabel .
      }
      BIND(COALESCE(?journalLabel,  REPLACE(STR(?journal__id), "^.*[/#]([^/#]+)$", "$1")) AS ?journal__prefLabel)
    }
    UNION
    {
      ?id swrc:series ?series__id .
      OPTIONAL {
        ?series__id rdfs:label ?seriesLabel .
      }
      BIND(COALESCE(?seriesLabel,  REPLACE(STR(?series__id), "^.*[/#]([^/#]+)$", "$1")) AS ?series__prefLabel)
    }
    UNION
    {
      ?id swrc:edition ?edition__id .
      OPTIONAL {
        ?edition__id rdfs:label ?editionLabel .
      }
      BIND(COALESCE(?editionLabel,  REPLACE(STR(?edition__id), "^.*[/#]([^/#]+)$", "$1")) AS ?edition__prefLabel)
    }
    UNION
    {
      ?id swrc:volume ?volume__id .
      OPTIONAL {
        ?volume__id rdfs:label ?volumeLabel .
      }
      BIND(COALESCE(?volumeLabel,  REPLACE(STR(?volume__id), "^.*[/#]([^/#]+)$", "$1")) AS ?volume__prefLabel)
    }
    UNION
    {
      ?id swrc:number ?number__id .
      OPTIONAL {
        ?number__id rdfs:label ?numberLabel .
      }
      BIND(COALESCE(?numberLabel,  REPLACE(STR(?number__id), "^.*[/#]([^/#]+)$", "$1")) AS ?number__prefLabel)
    }
    UNION
    {
      ?id swrc:pages ?pages__id .
      OPTIONAL {
        ?pages__id rdfs:label ?pagesLabel .
      }
      BIND(COALESCE(?pagesLabel,  REPLACE(STR(?pages__id), "^.*[/#]([^/#]+)$", "$1")) AS ?pages__prefLabel)
    }
    UNION
    {
      ?id swrc:year ?year__id .
      OPTIONAL {
        ?year__id rdfs:label ?yearLabel .
      }
      BIND(COALESCE(?yearLabel, REPLACE(STR(?year__id), "^.*[/#]([^/#]+)$", "$1")) AS ?year__prefLabel)
    }
    UNION
    {
      ?id swrc:month ?month__id .
      OPTIONAL {
        ?month__id rdfs:label ?monthLabel .
      }
      BIND(COALESCE(?monthLabel, REPLACE(STR(?month__id), "^.*[/#]([^/#]+)$", "$1")) AS ?month__prefLabel)
    }
    UNION
    {
      ?id swrc:address ?address__id .
      OPTIONAL {
        ?address__id rdfs:label ?addressLabel .
      }
      BIND(COALESCE(?addressLabel, REPLACE(STR(?address__id), "^.*[/#]([^/#]+)$", "$1")) AS ?address__prefLabel)
    }
    UNION
    {
      ?id swrc:isbn ?isbn__id .
      OPTIONAL {
        ?isbn__id rdfs:label ?isbnLabel .
      }
      BIND(COALESCE(?isbnLabel, REPLACE(STR(?isbn__id), "^.*[/#]([^/#]+)$", "$1")) AS ?isbn__prefLabel)
    }
    UNION
    {
      ?id swrc:howpublished ?howpublished__id .
      OPTIONAL {
        ?howpublished__id rdfs:label ?howpublishedLabel .
      }
      BIND(COALESCE(?howpublishedLabel, REPLACE(STR(?howpublished__id), "^.*[/#]([^/#]+)$", "$1")) AS ?howpublished__prefLabel)
    }
    UNION
    {
      ?id rdf:type ?temp_type .
      FILTER(?temp_type != swrc:Publication)
      BIND(REPLACE(STR(?temp_type), "^.*[/#]([^/#]+)$", "$1") AS ?type__prefLabel)
      BIND(REPLACE(STR(?temp_type), "^.*[/#]([^/#]+)$", "$1") AS ?type__id)
    }
    UNION
    {
      ?id swrc:abstract ?abstract__id .
      OPTIONAL {
        ?abstract__id rdfs:label ?abstractLabel .
      }
      BIND(COALESCE(?abstractLabel, REPLACE(STR(?abstract__id), "^.*[/#]([^/#]+)$", "$1")) AS ?abstract__prefLabel)
    }
    UNION
    {
      ?id swrc:note ?note__id .
      OPTIONAL {
        ?note__id rdfs:label ?noteLabel .
      }
      BIND(COALESCE(?noteLabel, REPLACE(STR(?note__id), "^.*[/#]([^/#]+)$", "$1")) AS ?note__prefLabel)
    }
    UNION
    {
      ?id swrc:hasProject ?hasProject__id .
      OPTIONAL {
        ?hasProject__id swrc:name ?hasProjectLabel .
      }
      BIND(COALESCE(?hasProjectLabel, REPLACE(STR(?hasProject__id), "^.*[/#]([^/#]+)$", "$1")) AS ?hasProject__prefLabel)
      BIND(CONCAT("/project/page/", REPLACE(STR(?hasProject__id), "^.*[/#]([^/#]+)$", "$1")) AS ?hasProject__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:isAbout ?isAbout__id .
      OPTIONAL {
        ?isAbout__id swrc:name ?isAboutLabel .
      }
      BIND(COALESCE(?isAboutLabel, REPLACE(STR(?isAbout__id), "^.*[/#]([^/#]+)$", "$1")) AS ?isAbout__prefLabel)
      BIND(CONCAT("/about/page/", REPLACE(STR(?isAbout__id), "^.*[/#]([^/#]+)$", "$1")) AS ?isAbout__dataProviderUrl)
    }
`