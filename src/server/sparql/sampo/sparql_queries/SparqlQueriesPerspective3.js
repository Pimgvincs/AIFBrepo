const perspectiveID = 'perspective3'

export const ReasearchTopicInstanceProperties = `
        {
      ?id swrc:ResearchTopic ?ResearchTopic__id .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/about/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
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
      ?id swrc:dealtWithIn ?dealtWithIn__id .
      OPTIONAL {
        ?dealtWithIn__id swrc:name ?dealtWithInLabel .
      }
      BIND(COALESCE(?dealtWithInLabel, REPLACE(STR(?dealtWithIn__id), "^.*[/#]([^/#]+)$", "$1")) AS ?dealtWithIn__prefLabel)
      BIND(CONCAT("/project/page/", REPLACE(STR(?dealtWithIn__id), "^.*[/#]([^/#]+)$", "$1")) AS ?dealtWithIn__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:isWorkedOnBy ?isWorkedOnBy__id .
      OPTIONAL {
        ?isWorkedOnBy__id swrc:name ?isWorkedOnByLabel .
      }
      BIND(COALESCE(?isWorkedOnByLabel, REPLACE(STR(?isWorkedOnBy__id), "^.*[/#]([^/#]+)$", "$1")) AS ?isWorkedOnBy__prefLabel)
      BIND(CONCAT("/person/page/", REPLACE(STR(?isWorkedOnBy__id), "^.*[/#]([^/#]+)$", "$1")) AS ?isWorkedOnBy__dataProviderUrl)
    }
`