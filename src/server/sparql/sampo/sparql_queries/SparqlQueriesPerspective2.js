const perspectiveID = 'perspective2';

export const PersonInstanceProperties = `
    {
      ?id swrc:Person ?person__id .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/person/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:name ?name__id .
      OPTIONAL {
        ?name__id rdfs:label ?nameLabel .
      }
      BIND(COALESCE(?nameLabel, REPLACE(STR(?name__id), "^.*[/#]([^/#]+)$", "$1")) AS ?name__prefLabel)
    }
    UNION
    {
      ?id swrc:homepage ?homepage__id .
      OPTIONAL {
        ?homepage__id rdfs:label ?homepageLabel .
      }
      BIND(?homepage__id AS ?homepage__prefLabel)
    }
    UNION
    {
      ?id swrc:phone ?phone__id .
      OPTIONAL {
        ?phone__id rdfs:label ?phoneLabel .
      }
      BIND(COALESCE(?phoneLabel,  REPLACE(STR(?phone__id), "^.*[/#]([^/#]+)$", "$1")) AS ?phone__prefLabel)
    }
    UNION
    {
      ?id swrc:fax ?fax__id .
      OPTIONAL {
        ?fax__id rdfs:label ?faxLabel .
      }
      BIND(COALESCE(?faxLabel,  REPLACE(STR(?fax__id), "^.*[/#]([^/#]+)$", "$1")) AS ?fax__prefLabel)
    }
    UNION
    {
      ?id swrc:affiliation ?affiliation__id .
      OPTIONAL {
        ?affiliation__id swrc:name ?affiliationLabel .
      }
      BIND(COALESCE(?affiliationLabel, REPLACE(STR(?affiliation__id), "^.*[/#]([^/#]+)$", "$1")) AS ?affiliation__prefLabel)
      BIND(CONCAT("/affiliation/page/", REPLACE(STR(?affiliation__id), "^.*[/#]([^/#]+)$", "$1")) AS ?affiliation__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:worksAtProject ?worksAtProject__id .
      OPTIONAL {
        ?worksAtProject__id swrc:name ?worksAtProjectLabel .
      }
      BIND(COALESCE(?worksAtProjectLabel, REPLACE(STR(?worksAtProject__id), "^.*[/#]([^/#]+)$", "$1")) AS ?worksAtProject__prefLabel)
      BIND(CONCAT("/project/page/", REPLACE(STR(?worksAtProject__id), "^.*[/#]([^/#]+)$", "$1")) AS ?worksAtProject__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:publication ?publication__id .
      OPTIONAL {
        ?publication__id swrc:title ?publicationLabel .
      }
      BIND(COALESCE(?publicationLabel, REPLACE(STR(?publication__id), "^.*[/#]([^/#]+)$", "$1")) AS ?publication__prefLabel)
      BIND(CONCAT("/publication/page/", REPLACE(STR(?publication__id), "^.*[/#]([^/#]+)$", "$1")) AS ?publication__dataProviderUrl)
    }
    UNION
    {
      ?id rdf:type ?temp_type .
      FILTER(?temp_type != swrc:Person) # Exclude the generic Person type
      BIND(REPLACE(STR(?temp_type), "^.*[/#]([^/#]+)$", "$1") AS ?type__prefLabel)
      BIND(REPLACE(STR(?temp_type), "^.*[/#]([^/#]+)$", "$1") AS ?type__id)
    }








`