
export const affiliationInstanceProperties = `
    {
      ?id swrc:Affiliation ?affiliation__id .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/affiliation/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:name ?name__id .
      OPTIONAL {
        ?name__id rdfs:label ?nameLabel .
      }
      BIND(COALESCE(?nameLabel,  REPLACE(STR(?name__id), "^.*[/#]([^/#]+)$", "$1")) AS ?name__prefLabel)
    }
    UNION
    {
      ?id swrc:homepage ?homepage__id .
      OPTIONAL {
        ?homepage__id rdfs:label ?homepageLabel .
      }
      BIND(COALESCE(?homepageLabel, REPLACE(STR(?homepage__id), "^.*[/#]([^/#]+)$", "$1")) AS ?homepage__prefLabel)

    }
    UNION
    {
      ?id swrc:head ?head__id .
      OPTIONAL {
        ?head__id swrc:name ?headLabel .
      }
      BIND(COALESCE(?headLabel,  REPLACE(STR(?head__id), "^.*[/#]([^/#]+)$", "$1")) AS ?head__prefLabel)
      BIND(CONCAT("/person/page/", REPLACE(STR(?head__id), "^.*[/#]([^/#]+)$", "$1")) AS ?head__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:employs ?employs__id .
      OPTIONAL {
        ?employs__id swrc:name ?employsLabel .
      }
      BIND(COALESCE(?employsLabel, REPLACE(STR(?employs__id), "^.*[/#]([^/#]+)$", "$1")) AS ?employs__prefLabel)
      BIND(CONCAT("/person/page/", REPLACE(STR(?employs__id), "^.*[/#]([^/#]+)$", "$1")) AS ?employs__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:member ?member__id .
      OPTIONAL {
        ?member__id swrc:name ?memberLabel .
      }
      BIND(COALESCE(?memberLabel, REPLACE(STR(?member__id), "^.*[/#]([^/#]+)$", "$1")) AS ?member__prefLabel)
      BIND(CONCAT("/person/page/", REPLACE(STR(?member__id), "^.*[/#]([^/#]+)$", "$1")) AS ?member__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:carriesOut ?carriesOut__id .
      OPTIONAL {
        ?carriesOut__id swrc:name ?carriesOutLabel .
      }
      BIND(COALESCE(?carriesOutLabel, REPLACE(STR(?carriesOut__id), "^.*[/#]([^/#]+)$", "$1")) AS ?carriesOut__prefLabel)
      BIND(CONCAT("/project/page/", REPLACE(STR(?carriesOut__id), "^.*[/#]([^/#]+)$", "$1")) AS ?carriesOut__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:publishes ?publishes__id .
      OPTIONAL {
        ?publishes__id swrc:title ?publishesLabel .
      }
      BIND(COALESCE(?publishesLabel, REPLACE(STR(?publishes__id), "^.*[/#]([^/#]+)$", "$1")) AS ?publishes__prefLabel)
      BIND(CONCAT("/publication/page/", REPLACE(STR(?publishes__id), "^.*[/#]([^/#]+)$", "$1")) AS ?publishes__dataProviderUrl)
    }
`