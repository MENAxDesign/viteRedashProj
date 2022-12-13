import { rest} from "msw";

export const handlers = [
    rest.get("https://api.artic.edu/api/v1/artworks", (req, res, ctx) => {
        return res(
            ctx.json({
                "pagination":{
                   "total":118760,
                   "limit":12,
                   "offset":0,
                   "total_pages":9897,
                   "current_page":1,
                   "next_url":"https:\/\/api.artic.edu\/api\/v1\/artworks?page=2"
                },
                "data":[
                   {
                      "id":55861,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/55861",
                      "is_boosted":false,
                      "title":"Craterhead Mountain of Hiawaii.",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBwAFAPUAAIliIZZrKJptKZ9yLo5pMpNsMpZuMpdvNJ9xMJ5xMZtxNJ93Pat1J6NzKq12KK54LqFzMaVzMqF0MKV1MqJyNKF3Nq96Mat4N619NKx+OK1\/OrF+OZl0QaN6Rq6APbOAN7eEPa+DR7KJTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhQJFHk8F8QqALheGIdDaCxsMCWUgAAcQkQagMFIbCgRMEADs=",
                         "width":7779,
                         "height":5382,
                         "alt_text":"A work made of black ballpoint pen, watercolor, and varnish on ivory wove paper."
                      },
                      "main_reference_number":"1979.205",
                      "has_not_been_viewed_much":true,
                      "boost_rank":null,
                      "date_start":1962,
                      "date_end":1965,
                      "date_display":"1962\/65",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Joseph Yoakum\nAmerican, 1890-1972",
                      "place_of_origin":"United States",
                      "dimensions":"18.3 \u00d7 26.5 cm (7 1\/4 \u00d7 10 7\/16 in.)",
                      "medium_display":"Black ballpoint pen, watercolor, and varnish on ivory wove paper",
                      "inscriptions":null,
                      "credit_line":"Bequest of Whitney Halstead",
                      "catalogue_display":null,
                      "publication_history":null,
                      "exhibition_history":null,
                      "provenance_text":null,
                      "publishing_verification_level":"Web Basic",
                      "internal_department_id":3,
                      "fiscal_year":null,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":false,
                      "is_zoomable":true,
                      "max_zoom_window_size":-1,
                      "copyright_notice":null,
                      "has_multimedia_resources":false,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":54.8622,
                      "color":null,
                      "latitude":null,
                      "longitude":null,
                      "latlon":null,
                      "is_on_view":false,
                      "on_loan_display":null,
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Drawing and Watercolor",
                      "artwork_type_id":14,
                      "department_title":"Prints and Drawings",
                      "department_id":"PC-13",
                      "artist_id":40896,
                      "artist_title":"Joseph Yoakum",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         40896
                      ],
                      "artist_titles":[
                         "Joseph Yoakum"
                      ],
                      "category_ids":[
                         "PC-13",
                         "PC-830",
                         "PC-142"
                      ],
                      "category_titles":[
                         "Prints and Drawings",
                         "African Diaspora",
                         "African American artists"
                      ],
                      "term_titles":[
                         "drawings (visual works)",
                         "paper (fiber product)",
                         "ink",
                         "coating (material)",
                         "watercolor",
                         "water-base paint",
                         "paint",
                         "prints and drawing"
                      ],
                      "style_id":null,
                      "style_title":null,
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         
                      ],
                      "style_titles":[
                         
                      ],
                      "classification_id":"TM-5",
                      "classification_title":"drawings (visual works)",
                      "alt_classification_ids":[
                         "TM-4"
                      ],
                      "classification_ids":[
                         "TM-5",
                         "TM-4"
                      ],
                      "classification_titles":[
                         "drawings (visual works)",
                         "prints and drawing"
                      ],
                      "subject_id":null,
                      "alt_subject_ids":[
                         
                      ],
                      "subject_ids":[
                         
                      ],
                      "subject_titles":[
                         
                      ],
                      "material_id":"TM-2982",
                      "alt_material_ids":[
                         "TM-2398",
                         "TM-3238",
                         "TM-2403",
                         "TM-3343",
                         "TM-2577"
                      ],
                      "material_ids":[
                         "TM-2982",
                         "TM-2398",
                         "TM-3238",
                         "TM-2403",
                         "TM-3343",
                         "TM-2577"
                      ],
                      "material_titles":[
                         "paper (fiber product)",
                         "ink",
                         "coating (material)",
                         "watercolor",
                         "water-base paint",
                         "paint"
                      ],
                      "technique_id":null,
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         
                      ],
                      "technique_titles":[
                         
                      ],
                      "theme_titles":[
                         "African Diaspora",
                         "African American artists"
                      ],
                      "image_id":"ef6721e3-9b58-1183-8890-8c2dca3b78a0",
                      "alt_image_ids":[
                         "67e30606-91fb-438d-8a91-6cc40c5c4964"
                      ],
                      "document_ids":[
                         
                      ],
                      "sound_ids":[
                         
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1979.205"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Craterhead Mountain of Hiawaii."
                            ],
                            "weight":40,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T10:18:34-06:00",
                      "updated_at":"2022-12-12T10:21:00-06:00",
                      "timestamp":"2022-12-12T10:29:14-06:00"
                   },
                   {
                      "id":244905,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/244905",
                      "is_boosted":false,
                      "title":"Black Light Series #7: Ego Painting",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBQAFAPQAAA4WGREZHT0gHxIbICsmKSwkKC4mKi4mKy4pLT0lIjAnLDAoLDUoLCspMTwtMkIiHUAjIUQmJEksLkIsMEEuMUc2Pkg2O0o5P3IvIQAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUVIAE8WGIVUDQsCnMgQTNJl1E5AhUCADs=",
                         "width":5556,
                         "height":5564,
                         "alt_text":"A work made of oil on canvas."
                      },
                      "main_reference_number":"2019.184",
                      "has_not_been_viewed_much":true,
                      "boost_rank":null,
                      "date_start":1969,
                      "date_end":1969,
                      "date_display":"1969",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Faith Ringgold\nAmerican, born 1930",
                      "place_of_origin":null,
                      "dimensions":"76 \u00d7 76 cm (30 \u00d7 30 in.)",
                      "medium_display":"Oil on canvas",
                      "inscriptions":null,
                      "credit_line":"Wilson L. Mead Trust Fund; Claire and Gordon Prussian Fund for Contemporary Art; Mr. and Mrs. Frank G. Logan Purchase Prize Fund;  Ada S. Garrett Prize, Flora Mayer Witkowsky Purchase Prize, Gordon Prussian Memorial, Emilie L. Wild Prize, William H. Bartels Prize, William and Bertha Clusmann Prize, Max V. Kohnstamm Prize, and Pauline Palmer Prize funds",
                      "catalogue_display":null,
                      "publication_history":"Lisa Farrington, Art on Fire: The Politics of Race and Sex in the Paintings of Faith Ringgold (New York: Millennium Fine Arts Publishing, 1999), 69, 70 (ill.).\n\nNaomi Beckwith, curator, Duro Olowu: Seeing Chicago, exh. cat. (Chicago: Museum of Contemporary Art, 2020), 390.\n\nMassimiliano Gioni and Gary Carrion-Murayari, eds., Faith Ringgold: American People, exh. cat. (London: Phaidon Press; New York: New Museum, 2022), front cover (color ill.), 58, 59 (color ill.), 231.",
                      "exhibition_history":"New York, Spectrum Gallery, Black America, Jan. 27\u2013Feb. 14, 1970, no cat.\n\nNew Brunswick, NJ, Voorhees Gallery, Rutgers University, Faith Ringgold: Black Woman Artist, 1963\u201373, Mar. 4\u2013Apr. 8, 1973, not in cat.\n\nNeuberger Museum of Art, Purchase College, State University of New York, American People, Black Light: Faith Ringgold\u2019s Paintings of the 1960\u2019s, Sept. 11\u2013Dec. 19, 2010, pl. 40; Miami Art Museum (now known as the Perez Art Museum), Nov. 6, 2011\u2013Jan. 1, 2012; Atlanta, Spellman College Museum of Fine Art, Feb. 2\u2013May 19, 2012; Washington D.C.; National Museum of Women in the Arts, June 21\u2013 Nov. 10, 2013.\n\nWeiss Berlin, Faith Ringgold, Apr. 26- June 18, 2018, no cat.\n\nMuseum of Contemporary Art Chicago, Duro Olowu: Seeing, Feb. 29-May 10, 2020 (extend to Sept. 13 due to the COVID-19 pandemic), no cat. no.\n\nLondon, Serpentine Gallery, Faith Ringgold, June 6\u2013Sept. 8, 2019, not in cat; Potomac, MD, Glenstone, Apr. 8\u2013Oct. 24, 2021 (Potomac only). \n\nNew York, New Museum, Fatih Ringgold: American People, Feb. 17-June 5, 2022, no cat. no.; San Fransico, de Young Museum, July 16-Nov. 27, 2022, Mus\u00e9e Picasso Paris, as Faith Ringgold, Jan. 31\u2013July 2, 2023 (New York and San Francisco only).",
                      "provenance_text":"The artist; sold to the Art Institute of Chicago, through Weiss Berlin, 2019.",
                      "publishing_verification_level":"Web Cataloged",
                      "internal_department_id":246,
                      "fiscal_year":2019,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":false,
                      "is_zoomable":true,
                      "max_zoom_window_size":1280,
                      "copyright_notice":"\u00a9 2019 Faith Ringgold \/ Artists Rights Society (ARS), New York",
                      "has_multimedia_resources":false,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":41.6426,
                      "color":{
                         "h":2,
                         "l":33,
                         "s":37,
                         "percentage":3.558306277266331e-5,
                         "population":11
                      },
                      "latitude":null,
                      "longitude":null,
                      "latlon":null,
                      "is_on_view":false,
                      "on_loan_display":null,
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Painting",
                      "artwork_type_id":1,
                      "department_title":"Contemporary Art",
                      "department_id":"PC-8",
                      "artist_id":56742,
                      "artist_title":"Faith Ringgold",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         56742
                      ],
                      "artist_titles":[
                         "Faith Ringgold"
                      ],
                      "category_ids":[
                         "PC-8",
                         "PC-825",
                         "PC-830",
                         "PC-142"
                      ],
                      "category_titles":[
                         "Contemporary Art",
                         "Women artists",
                         "African Diaspora",
                         "African American artists"
                      ],
                      "term_titles":[
                         "painting"
                      ],
                      "style_id":null,
                      "style_title":null,
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         
                      ],
                      "style_titles":[
                         
                      ],
                      "classification_id":"TM-9",
                      "classification_title":"painting",
                      "alt_classification_ids":[
                         
                      ],
                      "classification_ids":[
                         "TM-9"
                      ],
                      "classification_titles":[
                         "painting"
                      ],
                      "subject_id":null,
                      "alt_subject_ids":[
                         
                      ],
                      "subject_ids":[
                         
                      ],
                      "subject_titles":[
                         
                      ],
                      "material_id":null,
                      "alt_material_ids":[
                         
                      ],
                      "material_ids":[
                         
                      ],
                      "material_titles":[
                         
                      ],
                      "technique_id":null,
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         
                      ],
                      "technique_titles":[
                         
                      ],
                      "theme_titles":[
                         "Women artists",
                         "African Diaspora",
                         "African American artists"
                      ],
                      "image_id":"708195fa-7dbd-f794-1cc2-12ee696850a7",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         
                      ],
                      "sound_ids":[
                         
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "2019.184"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Black Light Series #7: Ego Painting"
                            ],
                            "weight":26,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T09:58:44-06:00",
                      "updated_at":"2022-12-12T10:01:02-06:00",
                      "timestamp":"2022-12-12T10:29:14-06:00"
                   },
                   {
                      "id":105203,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/105203",
                      "is_boosted":true,
                      "title":"Window from Coonley Playhouse, Riverside, Illinois",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhCAAFAPUAAGpUTGZdSX9iX2JoY3FrY3VuaHxxZoJgV41oX4ZvZ5Vya559d42QboeAeIeCeXp9j4uKgpGUgJyXkJ+bkZuZlKujnqinn6qppa6qpK+sp7CrqbSwqrm1xNXU2ODX2d7k7e3n4u3v7\/Ps7PDz8fzz8vv8+\/\/\/\/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAIAAUAAAYlwEFgAjkgAImIgfMBkRaVzaMTGpkuGQumJPKYNAwHgaIQSAqNIAA7",
                         "width":6396,
                         "height":3904,
                         "alt_text":"A triptych glass window in an oak frame with an asymmetrical geometric pattern of circles, squares, and rectangles in clear, red, green, blue, and black glass."
                      },
                      "main_reference_number":"1986.88",
                      "has_not_been_viewed_much":false,
                      "boost_rank":null,
                      "date_start":1912,
                      "date_end":1912,
                      "date_display":"1912",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Frank Lloyd Wright\nAmerican, 1867-1959",
                      "place_of_origin":"United States",
                      "dimensions":"Center panel: 35 1\/4 \u00d7 43 in. (89.5 \u00d7 109.2 cm)\nTwo side panels: 36 \u00d7 7 3\/4 in. (91.4 \u00d7 19.7 cm) (each)",
                      "medium_display":"Clear and colored leaded glass in oak frames",
                      "inscriptions":null,
                      "credit_line":"Purchased with funds provided by Dr. and Mrs. Edwin J. DeCosta and the Walter E. Heller Foundation",
                      "catalogue_display":null,
                      "publication_history":"Zukowsky, John, ed. 1987. Chicago Architecture and Design, 1872-1922: Birth of a Metropolis. Exh. cat. Art Institute of Chicago\/Prestel, cat. no. 183, p. 390.\n\nSaliga, Pauline, ed. 1990. Fragments of Chicago's Past: The Collection of Architectural Fragments at The Art Institute of Chicago. Exh. cat. Art Institute of Chicago, cat. no. 95.\n\nWilson, Richard Guy. 1995. \"Prairie School Works in the Department of Architecture at the Art Institute of Chicago.\"  Museum Studies 21(2): 93-111.  Cat. no. \n\nZukowsky, John, and Martha Thorne.  2004.  Masterpieces of Chicago Architecture. Art Institute of Chicago\/Rizzoli, p. 59.\n\nAlso used in various museum graphics, museum shop items, posters, calendars, etc.",
                      "exhibition_history":"Art Institute of Chicago, Chicago Architecture and Design, 1872-1922: Birth of a Metropolis, cat. no. 183; traveled to Paris, Mus\u00e9e d'Orsay, Oct. 2, 1987\u2013Jan. 4, 1988; Frankfurt am Main, Deutsches Architekturmuseum, Feb.  5-Apr. 25, 1988; and Art Institute of Chicago, July 16\u2013Sept. 5, 1988.\n\nArt Institute of Chicago, Fragments of Chicago's Past, Gallery 200, ongoing exhibition.\n\nArt Institute of Chicago, Silk Roads, December 9, 2006\u2013January 28, 2007.",
                      "provenance_text":null,
                      "publishing_verification_level":"Web Cataloged",
                      "internal_department_id":25,
                      "fiscal_year":null,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":false,
                      "is_zoomable":true,
                      "max_zoom_window_size":-1,
                      "copyright_notice":null,
                      "has_multimedia_resources":true,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":42.7285,
                      "color":{
                         "h":2,
                         "l":45,
                         "s":96,
                         "percentage":0.06265187898052493,
                         "population":272
                      },
                      "latitude":41.8795285207284,
                      "longitude":-87.6236180785389,
                      "latlon":"41.879528520728,41.879528520728",
                      "is_on_view":false,
                      "on_loan_display":null,
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Architectural fragment",
                      "artwork_type_id":19,
                      "department_title":"Architecture and Design",
                      "department_id":"PC-5",
                      "artist_id":37362,
                      "artist_title":"Frank Lloyd Wright",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         37362
                      ],
                      "artist_titles":[
                         "Frank Lloyd Wright"
                      ],
                      "category_ids":[
                         "PC-5",
                         "PC-109",
                         "PC-154",
                         "PC-831"
                      ],
                      "category_titles":[
                         "Architecture and Design",
                         "Art Institute Icons",
                         "Chicago Artists",
                         "Essentials"
                      ],
                      "term_titles":[
                         "architectural fragment",
                         "stained glass (material)",
                         "interiors",
                         "Prairie School",
                         "glassworking",
                         "circles",
                         "patterns",
                         "flags",
                         "architecture",
                         "wood (plant material)",
                         "glass",
                         "lead glass",
                         "geometric"
                      ],
                      "style_id":"TM-7039",
                      "style_title":"Prairie School",
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         "TM-7039"
                      ],
                      "style_titles":[
                         "Prairie School"
                      ],
                      "classification_id":"TM-184",
                      "classification_title":"architectural fragment",
                      "alt_classification_ids":[
                         "TM-103"
                      ],
                      "classification_ids":[
                         "TM-184",
                         "TM-103"
                      ],
                      "classification_titles":[
                         "architectural fragment",
                         "architecture"
                      ],
                      "subject_id":"TM-12285",
                      "alt_subject_ids":[
                         "TM-8803",
                         "TM-12793",
                         "TM-12701",
                         "TM-9124"
                      ],
                      "subject_ids":[
                         "TM-12285",
                         "TM-8803",
                         "TM-12793",
                         "TM-12701",
                         "TM-9124"
                      ],
                      "subject_titles":[
                         "interiors",
                         "circles",
                         "patterns",
                         "flags",
                         "geometric"
                      ],
                      "material_id":"TM-2666",
                      "alt_material_ids":[
                         "TM-2431",
                         "TM-2453",
                         "TM-2623"
                      ],
                      "material_ids":[
                         "TM-2666",
                         "TM-2431",
                         "TM-2453",
                         "TM-2623"
                      ],
                      "material_titles":[
                         "stained glass (material)",
                         "wood (plant material)",
                         "glass",
                         "lead glass"
                      ],
                      "technique_id":"TM-4136",
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         "TM-4136"
                      ],
                      "technique_titles":[
                         "glassworking"
                      ],
                      "theme_titles":[
                         "Art Institute Icons",
                         "Chicago Artists",
                         "Essentials"
                      ],
                      "image_id":"cd6c543d-a649-8f25-d224-6d22e7f86dcd",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         "dc48ba05-b1ff-f1cd-a7d2-80152cb35b22"
                      ],
                      "sound_ids":[
                         "dc48ba05-b1ff-f1cd-a7d2-80152cb35b22"
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_boosted":"Window from Coonley Playhouse, Riverside, Illinois",
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1986.88"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Window from Coonley Playhouse, Riverside, Illinois"
                            ],
                            "weight":24332,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T09:03:24-06:00",
                      "updated_at":"2022-12-12T09:05:58-06:00",
                      "timestamp":"2022-12-12T10:29:14-06:00"
                   },
                   {
                      "id":251704,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/251704",
                      "is_boosted":false,
                      "title":"Talby Cellular Telephones",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhCAAFAPUAAJaVlZeWlqGjpLiyrMyslt6xk8zVrsvWss7Tt9DWvNLOzNTS0dbT0NfT0dfV0t3b2d\/d2t\/e3OfZz+Xm2uLg3eHg3+Ph3+Xn3Ong3u7i3uLg4Obj5Ojl4+\/q5e3r6e\/u7PPs5fDt6\/Hv7fPv7PHw7\/Lx7vXy7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAIAAUAAAYlQI9D9KCEGKWIwKJoQAacCmCDSGAIHU1gYzhkCqDPgjS5jCSmIAA7",
                         "width":6647,
                         "height":4378,
                         "alt_text":"A work made of plastic."
                      },
                      "main_reference_number":"2019.1227",
                      "has_not_been_viewed_much":true,
                      "boost_rank":null,
                      "date_start":2003,
                      "date_end":2003,
                      "date_display":"2003",
                      "date_qualifier_title":"Made",
                      "date_qualifier_id":4,
                      "artist_display":"Marc Newson\nAustralian, born 1963",
                      "place_of_origin":null,
                      "dimensions":"13.2 \u00d7 4.4 \u00d7 1.3 cm (5 3\/16 \u00d7 1 3\/4 \u00d7 1\/2 in.)",
                      "medium_display":"Plastic",
                      "inscriptions":null,
                      "credit_line":"Gift of Michael Jefferson and Heidi Mucha",
                      "catalogue_display":null,
                      "publication_history":null,
                      "exhibition_history":null,
                      "provenance_text":null,
                      "publishing_verification_level":"Web Basic",
                      "internal_department_id":25,
                      "fiscal_year":2020,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":false,
                      "is_zoomable":false,
                      "max_zoom_window_size":843,
                      "copyright_notice":null,
                      "has_multimedia_resources":false,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":31.9452,
                      "color":{
                         "h":23,
                         "l":51,
                         "s":89,
                         "percentage":0.024793476750772123,
                         "population":116
                      },
                      "latitude":null,
                      "longitude":null,
                      "latlon":null,
                      "is_on_view":false,
                      "on_loan_display":null,
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Design",
                      "artwork_type_id":31,
                      "department_title":"Architecture and Design",
                      "department_id":"PC-5",
                      "artist_id":96237,
                      "artist_title":"Marc Newson",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         96237
                      ],
                      "artist_titles":[
                         "Marc Newson"
                      ],
                      "category_ids":[
                         "PC-5"
                      ],
                      "category_titles":[
                         "Architecture and Design"
                      ],
                      "term_titles":[
                         "phones",
                         "design",
                         "plastic",
                         "21st Century",
                         "design",
                         "postmodern",
                         "communication",
                         "cell phone",
                         "industrial design"
                      ],
                      "style_id":"TM-12913",
                      "style_title":"21st Century",
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         "TM-12913"
                      ],
                      "style_titles":[
                         "21st Century"
                      ],
                      "classification_id":"TM-13174",
                      "classification_title":"design",
                      "alt_classification_ids":[
                         "TM-14647",
                         "TM-14646",
                         "TM-14645",
                         "TM-11301"
                      ],
                      "classification_ids":[
                         "TM-13174",
                         "TM-14647",
                         "TM-14646",
                         "TM-14645",
                         "TM-11301"
                      ],
                      "classification_titles":[
                         "design",
                         "postmodern",
                         "communication",
                         "cell phone",
                         "industrial design"
                      ],
                      "subject_id":"TM-14020",
                      "alt_subject_ids":[
                         "TM-12574"
                      ],
                      "subject_ids":[
                         "TM-14020",
                         "TM-12574"
                      ],
                      "subject_titles":[
                         "phones",
                         "design"
                      ],
                      "material_id":"TM-2901",
                      "alt_material_ids":[
                         
                      ],
                      "material_ids":[
                         "TM-2901"
                      ],
                      "material_titles":[
                         "plastic"
                      ],
                      "technique_id":null,
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         
                      ],
                      "technique_titles":[
                         
                      ],
                      "theme_titles":[
                         
                      ],
                      "image_id":"fc39c520-2b6d-d207-fe07-60916a10e2e7",
                      "alt_image_ids":[
                         "49308ba7-57b8-4f05-f8c0-240b1aefc5fa",
                         "f5695936-15f1-f013-f8ad-3ad21f90abe5",
                         "8439c9eb-47d6-a0fe-4443-1ceac0450ac0"
                      ],
                      "document_ids":[
                         
                      ],
                      "sound_ids":[
                         
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "2019.1227"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Talby Cellular Telephones"
                            ],
                            "weight":1,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-10-14T12:47:05-05:00",
                      "updated_at":"2022-12-12T09:01:08-06:00",
                      "timestamp":"2022-12-12T10:29:15-06:00"
                   },
                   {
                      "id":11434,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/11434",
                      "is_boosted":true,
                      "title":"Salome with the Head of Saint John the Baptist",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBAAFAPQAABwXDCsjEiwjFyslFy4nGy0mHSspGS8pHDMjFDIoFzQsGkM5J006I0c1LEc5K1ZHL0xDMGBOMWdIOHpcQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURYDAcBRNBQjM9CiI5BpAsRAgAOw==",
                         "width":1581,
                         "height":2250,
                         "alt_text":"Large painting of woman, in gold and pink dress, placing severed head on platter."
                      },
                      "main_reference_number":"1960.3",
                      "has_not_been_viewed_much":false,
                      "boost_rank":null,
                      "date_start":1635,
                      "date_end":1645,
                      "date_display":"c. 1639\u201342",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Guido Reni\nItalian, 1575-1642",
                      "place_of_origin":"Italy",
                      "dimensions":"248.5 \u00d7 174 cm (97 3\/4 \u00d7 68 1\/2 in.)",
                      "medium_display":"Oil on canvas",
                      "inscriptions":null,
                      "credit_line":"Louise B. and Frank H. Woods Purchase Fund",
                      "catalogue_display":null,
                      "publication_history":"Luca Assarino, Sensi d'umilt\u00e0 e di stupore havuti da Luca Assarino, intorno le grandezze dell'eminentissimo cardinal Sacchetti, e le pitture di Guido Reni (Bologna, 1639), 29-30.\n\nCarlo Cesare Malvasia, Felsina pittrice: vite de' pittori bolognesi, vol. 2 (Bologna: Per l'erede di Domenico Barbieri, 1678; repr., Bologna: Tipografia Guidi all'Ancora, 1841), 64.\n\nFilippo Titi, Descrizione delle pitture, sculture e architetture esposte al pubblico in Roma (Rome: Marco Pagliarini, 1763; repr., Rome: Multigrafica Editrice, 1978), 482.\n\nAbbe [Jerome] Richard, Description historique et critique de l'italie, ou, Nouveaux m\u00e9moires sur l'\u00e9tat actuel de son gouvernement, des sciences, des arts, du commerce, de la population et de l'histoire naturelle, vol. 6 (Dijon: 1766; repr., Paris: Delalain, 1770), 54-56. \n\nJoseph J\u00e9r\u00f4me le Fran\u00e7ais de Lalande, Voyage d'un fran\u00e7ois en italie, fait dans les ann\u00e9es 1765 et 1766, vol. 3 (Venice and Paris: Desaint, 1769; repr., Yverdon: [F.-B. de Felice,] 1769-90), 458. \n\nMarcello Oretti, Le pitture che si ammirano nelli palaggi, e case de'nobili della Citt\u00e0 di Bologna e di altri edifici in da Citt\u00e0, vol. 1 (Bologna: Biblioteca Comunale, 1769), 65 MS 8.104.\n\nAdamo Chiusole, letterario delle pitture, sculture, e architetture pi\u00f9 rare di molte citt\u00e0 d'Italia (Vicenza: nella Stamperia Turra, 1782), 263. \n\nCatalogo dei Qudri, e Pitture esistenti nel Palazzo dell\u2019 Eccellentissima Casa Colonna in Roma (Rome: Presso Arcangelo Casaletti, 1783), 29 no. 174.\n\nFriedrich Wilhelm Basilius von Ramdohr, Ueber Mahlerei und Bildhauerarbeit in Romfiir Liebhaber des Schonen in der Kunst, vol. 2 (Leipzig: Bei Weidmanns Erben und Reich, 1787), 79-80. \n\nMariano Vasi, Itin\u00e9raire instructif de Rome: ou, Description genera le des monumens antiques et modernes et des ouvrages les plus remarquables de peinture, de sculpture et d'architecture de cette ce\/ebre ville et de ses environs, vol. 1 (Rome: Pagliarini, 1792), 325. \n\nG[eorg] K[aspar] Nagler, Neues allgemeines Kunstler-Lexicon, vol. 13 (Munich: Verlag von E. A. Fleischmann, 1843), 16. \n\n[Gustav] Waagen, Treasures of Art in Great Britain: Being an Account of the Chief Collections of Paintings, Drawings, Sculptures, illuminated M[anu]s[cript]s, etc., vol. 3 (London: John Murray, 1854), 21, no. 2. \n\nLouis Thies, Catalogue of the Collection of Engravings Bequeathed to Harvard College by Francis Calley Gray (Cambridge: Welch, Bigelow, and Company, 1869), 136. \n\nM[oses] F[oster] Sweetser, Artist Biographies: Guido Reni (Boston: Riverside Press, 1878), 158. \n\nAlgernon Graves, Summary of and Index to Waagen (London: A. Graves, 1912), 84. \n\nAlgernon Graves, A Century of Loan Exhibitions, 1813-1912, vol. 1 (1913; repr., New York: Hurt Franklin, 1968), 458, no. 62. \n\nGian Carlo Cavalli, Mostra di Guido Reni (Bologna: Edizioni Alfa, 1954), 102, 111. \n\nG[eorg] K[aspar] Nagler, Neues allgemeines Kiinstler-Lexikon, 3rd ed., vol. 14 (Leipzig: Schwarzenberg and Schumann, 1924), 294.\n\nCesare Gnudi and Gian Carlo Cavalli, Guido Reni (Florence: Vallecchi, 1955), 88-89 under no. 84. \n\nCity of Manchester Art Gallery, Art Treasures Centenary: European Old Masters, exh. cat. (Manchester: Art Gallery, 1957), 41, under no. 144. \n\nFederico Zeri, \"La 'Salome' di Guido Gia in Casa Colonna,\" Paragone 11, no. 121 (1960): 50-60, figs. 35-8. \n\nArt Institute of Chicago, Annual Report 1959-1960 (Chicago: Art Institute of Chicago, 1960), 10. \n\nAnthony M. Clark, \"A Late, Great Guido Reni,\" Art Institute of Chicago Quarterly 54, no. 2 (1960): 3-7 (ill.). \n\nG[eorges] W[ildenstein ], \"La Chronique des Arts,\" Supplement a la Gazette des Beaux-Arts 57 (1961): 27 fig. 92. \n\nArt Institute of Chicago, Paintings in the Art Institute of Chicago: A Catalogue of the Picture Collection (Chicago: Art Institute of Chicago, 1961), 33, 394 (ill.). \n\nEllis Waterhouse, Italian Baroque Painting (London: Phaidon Press, 1962), 96-98, fig. 85. \n\nFrederick Cummings, Art in Italy, 1600-1700, exh. cat. (Detroit : Detroit Institute of Arts; distributed by H.N. Abrams, New York, 1965), 87 cat. 82.\n\nHoward Hibbard and Miiton Lewine, \"Seicento at Detrok\" Burlington Magazine 107, no. 748 (1965): 370. \n\nStephen Pepper, \"Detroit. The flowering of the Baroque in and out of Rome: A triumph for the provinces,\" Arts Magazine 39 (1965): 43. \n\nDenis Mahon, \"Stock-taking in Seicento Studies,\" Apollo 82 (1965): 381, 385-86, 391, pl. VII. \n\nDonald Posner, \"The Baroque revolution in Italy,\" Art News 64 (1965): 33, 58 fig. 4.\n\nAlfonso E. Perez Sanchez, Pintura italiana de s. XVII en Espana (Madrid: Universidad de Madrid, 1965), 185. \n\nJohn Maxon, The Art Institute of Chicago (New York: Harry N. Abrams, 1970; repr., London: Thames and Hudson, 1977, 1983, 1987), 46-47, 285 (ill.). \n\nEdi Baccheschi, L 'opera completa di Guido Reni (Milan: Rizzo Ii Editore, 1971), 109 under no. 168, 110 no. 178 (ill.). \n\nBurton B. Fredericksen and Federico Zeri, Census of Pre-Nineteenth-Century Italian Paintings in North American Public Collections (Cambridge, MA.: Harvard University Press, 1972), 173, 417, 571. \n\nPeter Tomory, Catalogue of the Italian Paintings before 1800 (Sarasota, FL.: John and Mable Ringling Museum of Art, 1976), 127 under no. 132. \n\nArt Institute of Chicago, 100 Masterpieces (Chicago: Rand McNally, 1978), 54-55, fig. 17. \n\nCarlo Cesare Malvasia, The Life of Guido Reni, trans. Catherine Enggass and Robert Enggass (University Park, PA., and London: Pennsylvania State University Press, 1980), 148. \n\nRichard E. Spear, Domenichino (New Haven and London: Yale University Press, 1982), 264-65 no. 7, under no. 95. \n\nEmilia Calbi and Daniela Scaglietti Kelescian, eds., Marcello Oretti e ii patrimonio artistico privato Bolognese (Bologna: Istituto per i beni artistici culturali naturali della Regione Emilia-Romagna, 1984), 164. \n\nD. Stephen Pepper,  Guido Reni: A Complete Catalogue of His Works with an Introductiory Text (Oxford: Phaidon Press Limited, 1984), 286 no. 186; fig. 218, appendix I, B11.\n\nAnthony M. Clark, Pompeo Batoni: A Complete Catalogue of his Works with an Introductory Text (Oxford: Phaidon Press, 1985), 218, under no. 31. \n\nJorg Martin Merz, \"Rezensionen,\" Kunstchronik 40 (1987): 107. \n\nJames N. Wood and Katharine C. Lee [Reid], Master Paintings in the Art Institute of Chicago, (Chicago: Art Institute of Chicago, 1988), 34 (ill.). \n\nAlessandro Conti, \"Pittura e immagine in Guido Reni: dalle opere 'non perfette' al tempo pittore\" Prospettiva, no. 52 (January 1988): 27.\n\nSusan L. Caroselli, ed., Guido Reni, 1575-1642, exh. cat. (Los Angeles: Los Angeles County Museum of Art; Bologna: Nuova Alfa Editoriale, 1988), 87, 92, 308 cat. 59.  \n\nVeronika Birke, Guido Reni und der Reproduktionsstich (Vienna: Graphische Sammlung Albertina, 1988), 115, no. 92 (ill.). \n\nSybille Ebert-Schifferer, Andrea Emiliani and Erich Schleier, Guido Reni und Europa : Ruhm und Nachruhm, exh. cat. (Frankfurt: Schirn Kunsthalle; Bologna: Nuova Alfa Editoriale, 1988), 109, 138, 433, 657.\n\nMarzia Faietti, Konrad Oberhuber, and Artur Rosenauer, \"Nuove proposte su Guido Reni a seguito della rassegna Bolognese,\" Accademia clementina: atti e memorie 25 (1990): 73. \n\nPaul G. Koch, A Burning and a Shining light: A Profile of John the Baptist (La Crosse, Ind.: Legacy of Words, 1996), 154 (ill.). \n\nJohn Gedo, The Artist and the Emotional World (New York: Columbia University Press, 1996), 107-108, fig. 8.1. \n\nEduard A. Safarik, The Colonna Collection of Paintings: Inventories 1611-1795 (Munich; New Providence: K.G. Saur, 1996), 61, 66 no. 169, 68, 70 no. 63, 104 no. 21, 125 no. 75, 629, 638 no. 174, 1058 no. 48, plate 48.\n\nRichard E. Spear, The \u2018Divine\u2019 Guido: Religion, Sex, Money and Art in the World of Guido Reni (New Haven and London: Yale University Press, 1997), 312 fig. 168, 314, 390n96.\n\nPolly Shulman, \"Uncommon Denominator of Art and Medicine,\" New York Times, October 5, 1999, D7 (ill.)\n\nG\u00e9rard-Julien Salvy, Reni (Milan: Electa, 2001), 138 no. 194, 139 (detail ill.), 140 (detail ill.), 157.\n\nBarbara Di Meola, \"La collezione del Cardinale Girolamo I Colonna,\" in Francesca Cappelletti, Decorazione e collezionismo a Roma nel Seicento: Vicende di artisti, committenti, mercanti (Rome: Gangemi Editore, 2003), 116-18, fig. 4. \n\nJonathan Unglaub, \u201cPoussin\u2019s Esther before Ahasuerus: Beauty, Majesty, Bondage,\u201d The Art Bulletin 85, no. 1 (March 2003): 120-21, fig. 12.\n\nEdgar Peters Bowron, Pompeo Batoni: Complete Catalogue of his Paintings, vol. 1 (New Haven and London: Yale University Press, 2016), 37, under no. 33.",
                      "exhibition_history":"London, British Institution, 1819, no. 62, as Judith with Head of Holofernes.\n\nDetroit Institute of Arts, Art in Italy, 1600-1700, Apr. 6-May 9, 1965, no. 82.\n\nBologna, Pinoteca Nazionale, Guido Reni, 1575-1642, Sep. 5-Nov. 13, 1988, cat. 71; Los Angeles County Museum of Art, Dec. 11, 1988-Feb. 5, 1989, cat. 59; Fort Worth, Kimbell Art Museum, Mar. 9-May 14, 1989 [Bologna only].\n\nFrankfurt, St\u00e4del Museum, Guido Reni: The Beauty of the Divine, Nov. 23, 2022 - Mar. 5, 2023; Madrid, Museo del Prado, Mar. 28 - July 9, 2023.",
                      "provenance_text":"Cardinal Girolamo Colonna (died 1666), Palazzo Colonna, Rome, by 1647 [Colonna collection inventory, 1647, no. 169; see Safarik 1996 for this and the following]; by descent in the Colonna family, until at least 1783 [Colonna collection inventory, 1783, no. 174]. Earl of Darnley, Cobham Hall, Kent, England, by 1812 [Graves 1912, no. 62]; by descent to Iva Francis Walter Bligh, 8th Earl of Darnley (died 1927); sold, Sotheby's, London, July 22-23, 1957, lot 318, to \"Nash\" for \u00a3100. George Wildenstein, London and New York, by March 1958 [record of phone conversation between Ay Wang Hsia, Wildenstein and Company, and Art Institute, April 4 and April 18, 1990, in curatorial object file.]; sold to the Art Institute of Chicago, 1960.",
                      "publishing_verification_level":"Web Cataloged",
                      "internal_department_id":14,
                      "fiscal_year":null,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":true,
                      "is_zoomable":true,
                      "max_zoom_window_size":-1,
                      "copyright_notice":null,
                      "has_multimedia_resources":true,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":25.7281,
                      "color":{
                         "h":39,
                         "l":30,
                         "s":73,
                         "percentage":0.0030644523527085807,
                         "population":31
                      },
                      "latitude":41.8792579767193,
                      "longitude":-87.623834721744,
                      "latlon":"41.879257976719,41.879257976719",
                      "is_on_view":false,
                      "on_loan_display":"<p>On loan to St\u00e4del Museum in Frankfurt am Main for <i>Guido Reni: The Beauty of the Divine<\/i><\/p>",
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Painting",
                      "artwork_type_id":1,
                      "department_title":"Painting and Sculpture of Europe",
                      "department_id":"PC-10",
                      "artist_id":36350,
                      "artist_title":"Guido Reni",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         36350
                      ],
                      "artist_titles":[
                         "Guido Reni"
                      ],
                      "category_ids":[
                         "PC-10",
                         "PC-831"
                      ],
                      "category_titles":[
                         "Painting and Sculpture of Europe",
                         "Essentials"
                      ],
                      "term_titles":[
                         "oil on canvas",
                         "oil painting",
                         "oil paint (paint)",
                         "biblical",
                         "painting (image making)",
                         "canvas",
                         "painting",
                         "european painting",
                         "Salome",
                         "saints",
                         "Saint John the Baptist",
                         "violence",
                         "death",
                         "decapitation"
                      ],
                      "style_id":null,
                      "style_title":null,
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         
                      ],
                      "style_titles":[
                         
                      ],
                      "classification_id":"TM-66",
                      "classification_title":"oil on canvas",
                      "alt_classification_ids":[
                         "TM-9",
                         "TM-54"
                      ],
                      "classification_ids":[
                         "TM-66",
                         "TM-9",
                         "TM-54"
                      ],
                      "classification_titles":[
                         "oil on canvas",
                         "painting",
                         "european painting"
                      ],
                      "subject_id":"TM-12337",
                      "alt_subject_ids":[
                         "TM-12338",
                         "TM-8827",
                         "TM-12339",
                         "TM-12307",
                         "TM-12097",
                         "TM-12340"
                      ],
                      "subject_ids":[
                         "TM-12337",
                         "TM-12338",
                         "TM-8827",
                         "TM-12339",
                         "TM-12307",
                         "TM-12097",
                         "TM-12340"
                      ],
                      "subject_titles":[
                         "biblical",
                         "Salome",
                         "saints",
                         "Saint John the Baptist",
                         "violence",
                         "death",
                         "decapitation"
                      ],
                      "material_id":"TM-2451",
                      "alt_material_ids":[
                         "TM-3124"
                      ],
                      "material_ids":[
                         "TM-2451",
                         "TM-3124"
                      ],
                      "material_titles":[
                         "oil paint (paint)",
                         "canvas"
                      ],
                      "technique_id":"TM-4273",
                      "alt_technique_ids":[
                         "TM-3891"
                      ],
                      "technique_ids":[
                         "TM-4273",
                         "TM-3891"
                      ],
                      "technique_titles":[
                         "oil painting",
                         "painting (image making)"
                      ],
                      "theme_titles":[
                         "Essentials"
                      ],
                      "image_id":"1f5b595f-dbbd-3c9d-ca49-9263c3d93841",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         "390c54e3-82bc-c57f-077a-6b5a9a1d939d"
                      ],
                      "sound_ids":[
                         "390c54e3-82bc-c57f-077a-6b5a9a1d939d"
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_boosted":"Salome with the Head of Saint John the Baptist",
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1960.3"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Salome with the Head of Saint John the Baptist"
                            ],
                            "weight":8743,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T00:30:01-06:00",
                      "updated_at":"2022-12-12T00:31:41-06:00",
                      "timestamp":"2022-12-12T10:29:15-06:00"
                   },
                   {
                      "id":8961,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/8961",
                      "is_boosted":false,
                      "title":"Head of Arthur Jerome Eddy",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBQAFAPQAAD8\/O0REQUpKR1FRT35+fZmZl5uamZubmZ+fn6Kioqampaenp6ioqLW1tLW1tri4uLq6ur6+vr+\/v9LS0tPT0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUVIIMQyQIhgfJMjtBM0gAMEWUUxxQCADs=",
                         "width":2304,
                         "height":2250,
                         "alt_text":"A work made of bronze."
                      },
                      "main_reference_number":"1931.502",
                      "has_not_been_viewed_much":false,
                      "boost_rank":null,
                      "date_start":1898,
                      "date_end":1898,
                      "date_display":"1898",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Auguste Rodin\nFrench, 1840-1917",
                      "place_of_origin":"France",
                      "dimensions":"45 \u00d7 49.5 \u00d7 27.3 cm (17 3\/4 \u00d7 19 1\/2 \u00d7 10 3\/4 in.)",
                      "medium_display":"Bronze",
                      "inscriptions":null,
                      "credit_line":"Arthur Jerome Eddy Memorial Collection",
                      "catalogue_display":"<p>Unknown 57 1922.<\/p>",
                      "publication_history":null,
                      "exhibition_history":null,
                      "provenance_text":null,
                      "publishing_verification_level":"Web Basic",
                      "internal_department_id":14,
                      "fiscal_year":1930,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":true,
                      "is_zoomable":true,
                      "max_zoom_window_size":-1,
                      "copyright_notice":null,
                      "has_multimedia_resources":false,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":2.6154,
                      "color":{
                         "h":52,
                         "l":65,
                         "s":0,
                         "percentage":0.28812794668119557,
                         "population":1999
                      },
                      "latitude":null,
                      "longitude":null,
                      "latlon":null,
                      "is_on_view":false,
                      "on_loan_display":"<p>On loan to High Museum of Art in Atlanta for <i>Rodin in the United States: Confronting the Modern<\/i><\/p>",
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Sculpture",
                      "artwork_type_id":3,
                      "department_title":"Painting and Sculpture of Europe",
                      "department_id":"PC-10",
                      "artist_id":36418,
                      "artist_title":"Auguste Rodin",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         36418
                      ],
                      "artist_titles":[
                         "Auguste Rodin"
                      ],
                      "category_ids":[
                         "PC-10"
                      ],
                      "category_titles":[
                         "Painting and Sculpture of Europe"
                      ],
                      "term_titles":[
                         "bust\/head",
                         "bronze",
                         "copper alloy",
                         "nonferrous metal",
                         "metal",
                         "inorganic material",
                         "sculpture"
                      ],
                      "style_id":null,
                      "style_title":null,
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         
                      ],
                      "style_titles":[
                         
                      ],
                      "classification_id":"TM-347",
                      "classification_title":"bust\/head",
                      "alt_classification_ids":[
                         "TM-13"
                      ],
                      "classification_ids":[
                         "TM-347",
                         "TM-13"
                      ],
                      "classification_titles":[
                         "bust\/head",
                         "sculpture"
                      ],
                      "subject_id":null,
                      "alt_subject_ids":[
                         
                      ],
                      "subject_ids":[
                         
                      ],
                      "subject_titles":[
                         
                      ],
                      "material_id":"TM-2430",
                      "alt_material_ids":[
                         "TM-2694",
                         "TM-2683",
                         "TM-2568",
                         "TM-2600"
                      ],
                      "material_ids":[
                         "TM-2430",
                         "TM-2694",
                         "TM-2683",
                         "TM-2568",
                         "TM-2600"
                      ],
                      "material_titles":[
                         "bronze",
                         "copper alloy",
                         "nonferrous metal",
                         "metal",
                         "inorganic material"
                      ],
                      "technique_id":null,
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         
                      ],
                      "technique_titles":[
                         
                      ],
                      "theme_titles":[
                         
                      ],
                      "image_id":"0377f007-2251-af1f-e997-ac44217b6651",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         
                      ],
                      "sound_ids":[
                         
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1931.502"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Head of Arthur Jerome Eddy"
                            ],
                            "weight":929,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T00:30:01-06:00",
                      "updated_at":"2022-12-12T00:31:41-06:00",
                      "timestamp":"2022-12-12T10:29:15-06:00"
                   },
                   {
                      "id":14556,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/14556",
                      "is_boosted":false,
                      "title":"Auvers, Panoramic View",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBgAFAPQAAGNpVmpvWGhsW2pyW2h2WW97XnBzWWtyYGt0Ym92Y255ZXR2YHV1Y3Z2Y3RyZnF5YHV4YXR5ZnV7Z3d9Z3V5cH2AZoWNX4eNX4mRi4qSjIyTjomWkZCWkpGXkgAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYINdpWLZNipQciOEwQQMMCxRRwkMU1lWFADs=",
                         "width":12293,
                         "height":9759,
                         "alt_text":"View of a village surrounded by hills, fields, and trees, shown from a vantage point above the scene. Subtly rolling hills recede into a bluish gray-ish sky punctuated by white clouds. Thick brushstrokes built up atop each other are visible throughout."
                      },
                      "main_reference_number":"1933.422",
                      "has_not_been_viewed_much":false,
                      "boost_rank":null,
                      "date_start":1873,
                      "date_end":1875,
                      "date_display":"1873-75",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Paul Cezanne\nFrench, 1839-1906",
                      "place_of_origin":"France",
                      "dimensions":"65.2 \u00d7 81.3 cm (25 5\/8 \u00d7 32 in.)",
                      "medium_display":"Oil on canvas",
                      "inscriptions":null,
                      "credit_line":"Mr. and Mrs. Lewis Larned Coburn Memorial Collection",
                      "catalogue_display":"<p>Rewald R. 221<\/p><p>Unknown #304;<\/p><p>Unknown #1 repro 30;<\/p><p>Unknown #4.<\/p>",
                      "publication_history":"Journal des Arts 43 (July 9, 1921), p. 2.\n\nDaniel Catton Rich, \u201cThe Bequest of Mrs. L. L. Coburn,\u201d Bulletin of The Art Institute of Chicago 26 (1932), p. 70, as Auvers-sur-Oise, 1873.\n\nLionello Venturi, C\u00e9zanne: son art, son oeuvre vols. 2 (Paris, 1936), no. 150 (ill.), as Auvers, vue panoramique, 1873-75.\n\nR. Goldwater in Art News Annual (March 26, 1938), p. 146 (ill.).\n\nAlbert Barnes and Violette de Manzia, The Art of Paul C\u00e9zanne (New York, 1939), no. 47, as Auvers-sur-Oise: Village Panorama, 1873-75.\n\nCoronet (May 1939), p. 12 (ill.).\n\nJohn Rewald, \u201cC\u00e9zanne\u2019s Theories About Art,\u201d Art News 47, 7 (November, 1948), fig. 53.\n\nCharles Fabens Kelly, \u201cChicago: Record Years,\u201d Art News 51, 4 (June-July-August 1952), p. 54, as Auvers-sur-Oise.\n\nMayer Schapiro, Paul C\u00e9zanne (New York, 1952), pp. 44-45 (ill.), as View of Auvers, c. 1874.\n\nM. Raynal, Geneva, 1954, p. 40 (ill.).\n\nDavid Cooper, \u201cThe Painters of Auvers-sur-Oise,\u201d Burlington Magazine 97 (April 1955), p. 103, fig. 8 (ill.).\n\nThe Art Institute of Chicago, A Brief Guide to the Collections (The Art Institute of Chicago, 1956), p. 36, as Auvers, Village Panorama.\n\nPaul Gachet, Deux Amis des Impressionistes: Le Docteur Gachet et Murer (Paris, 1956), p. 56, n. 2, as Panorma (Auvers). \n\nThe Art Institute of Chicago, Paintings in The Art Institute of Chicago: A Catalogue of the Picture Collection (Chicago, 1961), p. 71, as Auvers: Village Panorama, 1873-75. \n\nJohn Rewald, \u201cChoquet and C\u00e9zanne,\u201d Gazette des Beaux-Arts (July-August 1969), p. 82, under no. 6, reprinted in John Rewald, Studies in Impressionism (London, 1985), p. 165, under no. 6.\n\nAlice Bellony-Rewald, The Lost World of Impressionists (London, 1976), pp. 150-51 (ill.),\n\nJohn Rewald, Post-Impressionism: From Van Gogh to Gauguin (New York, 1978), p. 362 (ill.), as \n\nRen\u00e9 Huyghe, La Rel\u00e8ve du reel: impressionnisme, symbolisme (Paris, 1974), no. 179.\n\nF. Elgar, Newe York, 1975, fig. 29.\n\nN. Wadley, London, 1975, pl. 26.\n\nR. Shikes and P. Harper, Pissarro, His Life and Work (New York, 1980), p. 119, ill.\n\nRichard Shiff, C\u00e9zanne and the End of Impressionism: A Study of the Theory, Technique, and Critical Evaluation of Modern Art (Chicago and London, 1984), pp. 112, fig. 22, 113-115, as View of Auvers also called Auvers: Village Panorma, c. 1874.\n\nPaul C\u00e9zanne, exh. cat. (Madrid, Museo Epa\u00f1ol de Arte Conempor\u00e1neo, 1984), p. 232 (ill.), as Vista de Auvers desde lo alto, 1873-75, illustrated only.\n\nB. Bernard, The Impressionist Revolution (London, 1986), p. 247, ill.\n\nRichard Brettell, French Impressionists (Chicago, 1987), pp. 18 (ill.), 19, 117, as Auvers: Village Panorama, c. 1873.\n\nR. Wollheim, Painting as Art (Princeton, 1987), fig. 1.\n\nHajo D\u00fcchting, Paul C\u00e9zanne 1839-1906: Natur wird Kunst (Cologne, 1990), pp. 66 (ill.), 72, as Blick auf Auvers, c. 1874.\n\nMichael Howard, C\u00e9zanne (London, 1990), p. 66, 67 (ill.), as Auvers, Panoramic View, 1873-75.\n\nPhilippe Dagen, C\u00e9zanne (Paris, 1995), p. 57 (ill.), 59, as Auvers, vue panoramique, 1873-75.\n\nCharles de Lartigue, Les paysages de Paul C\u00e9zanne (Lyon, 1995), pp. 74, as Auvers, vue panoramique, c. 1873-75.\n\nJohn Rewald, The Paintings of Paul C\u00e9zanne: A Catalogue Raisonn\u00e9 (New York, 1996), vol. 1, p. 161, no. 221, vol. 2, p. 73, as Vue panoramique d\u2019Auvers-sur-oise, 1873-74.\n\n\nGuillermo Solana, Van Gogh: Los \u00daltimos Paisajes, (Museo Thyssen-Bornemisza), p. 58 (ill.), cat. 1.\n\nThe Age of Impressionism at the Art Institute of Chicago (New Haven and London, 2008), cat. 14, pp. 50, 51 (ill.).\n\nMarco Goldin, ed., Storie dell'Impressionismo: I grandi protagonist da Monet a Renoir da Van Gogh a Gauguin (Linea d\u2019ombre, 2016), 322-23 (detail ill.), 423-30 cat. 83.\n\nAchim Borchardt-Hume, Gloria Groom, Caitlin Haskell and Natalia Sidlina, eds., Cezanne, exh. cat. (Chicago: Art Institute of Chicago, 2022), 43, 96-97 cat. 27.",
                      "exhibition_history":"Paris, Manzi, Joyant & Cie, Exposition d\u2019art moderne, 1912, cat. 15, as Auvers-sur-Oise (Vue panormaique). \n\nThe Art Institute of Chicago, Exhibition of the Mrs. L. L. Coburn Collection: Modern Paintings and Watercolors, April 6 \u2013 October 9, 1932, cat. 1 (ill.), as Auvers-sur-Oise, Village Panorama, 1873.\n\nThe Art Institute of Chicago, A Century of Progress Exhibition of Painting and Sculpture, 1933, cat. 304, as Auvers-sur-Oise, Village Panorama, 1873.\n\nPhiladelphia, Pennsylvania Museum of Art, Exhibition of the Works of C\u00e9zanne, November 10 \u2013 December 10, 1932, cat. 4, as Auvers-sur-Oise, Village Panorama, 1873.\n\nThe Art Institute of Chicago, C\u00e9zanne, Paintings, Watercolors and Drawings: A Loan Exhibition, February \u2013 March 1952, traveled to New York, Metropolitan Museum of Art, April \u2013 May 1952, cat.  15 (ill.), as Auvers: Village Panorama, 1873-75. \n\nParis, Orangerie des Tuileries, Van Gogh et Les Peinters d\u2019Auvers sur Oise, November 24, 1954 \u2013 February 28, 1955, cat. 12 (ill.), as Vue d\u2019Auvers, 1873-74.\n\nLos Angeles County Museum of Art, A Day in the Country: Impressionism and the French Landscape, June 28-September 16, 1984, traveled to The Art Institute of Chicago, October 23, 1984-January 6, 1985 and Paris, Galeries nationales du Grand Palais, February 8-April 22, 1985, cat. 69 (ill.), as Auvers, Panoramic View (Auvers, Vue panoramique), 1873-75.\n\nTokyo, The Seibu Museum of Art, The Impressionist Tradition: Masterpieces From The Art Institute of Chicago, October 18 \u2013 December 17, 1985, traveled to Fukoka Art Museum, January 5 \u2013 February 2, 1986 and Kyoto Municipal Museum of Art, March 4 \u2013 April 13, 1986, cat. 26 (ill.), as Auvers: Panoramic View, 1873-75.\n\nParis, Galeries nationales du Grand Palais, C\u00e9zanne, September 25, 1995-January 7, 1996, cat. 31; London, Tate Gallery, February 8-April 28, 1996; Philadelphia Museum of Art, May 26-August 18, 1996.\n\nGlasgow, Mclellan Galleries, The Birth of Impressionism, May 23 \u2013 September 7, 1997, no cat. no., as Auvers: Village Panorama, c. 1873.\n\nSydney Art Gallery of New South Whales, Australia, The Classic Cezanne, November 28, 1997 \u2013 February 28, 1999, cat. 3, Panoramic view of Auvers\/Vue panoramique d\u2019Auvers-sur-Oise, c. 1873-74.\n\nNew York, The Metropolitan Museum of Art, C\u00e9zanne to Van Gogh: The Collection of Dr. Gachet, May \u2013 August 1999, traveled to Amsterdam, The Van Gogh Museum, September \u2013 December 1999, cat. P.G. II-4, as Panorama (Auvers), 1873.\n\nNewcastle-upon-Tyne, Laing Art Gallery, Exchange loan for Van Gogh\/ Gauguin: The Studio of the South, August 15, 2001-June 2, 2002.\n\nNew York, Pioneering Modern Painting: C\u00e9zanne & Pissarro 1865-1885, June 26 \u2013 September 12, 2005, traveled to Los Angeles County Museum of Art, October 20, 2005 \u2013 January 2006 and Paris, Mus\u00e9e d\u2019Orsay, February 27 \u2013 May 28, 2006, cat. 66, Auvers-sur-Oise, Panoramic View (Vue panoramique d\u2019Auvers-sur-Oise), c. 1875-76.\n\nMadrid, Museo Thyssen-Bornemisza, Van Gogh in Auvers, June 12\u2013September 16, 2007, cat. 1.\n\nFort Worth, Tex., Kimbell Museum of Art, The Impressionists: Master Paintings from the Art Institute of Chicago, June 29\u2013November 2, 2008, cat. 14 (ill.).\n\nParis, Mus\u00e9e Luxembourg, Cezanne et Paris, October 10, 2011-February 27, 2012.\n\nTreviso, Museo di Santa Caterina, Storie dell'Impressionismo, October 29, 2016-April 17, 2017, cat. 83.\n\nArt Institute of Chicago, Cezanne, May 15-Sep. 5, 2022, cat. 27; London, Tate, Oct. 5, 2022-Mar. 12, 2023.",
                      "provenance_text":"Dr. Paul Gachet, Auvers-sur-Oise (died 1909), c. 1873\/74 to 1909 [this and the following information according to New York 1999]; sold by Paul Gachet fils before 1912.  Ambroise Vollard, Paris [according to Rewald 1996; the painting is included in Vollard photographic archives as no. 209].  Manzi, Joyant et Cie, Paris by 1912 [see Paris 1912].  Possibly Georges Viau, Paris [according to 1921 auction catalogue citied below and Venturi 1936]. Alfred Strolin, Paris; his sale, Paris, H\u00f4tel Drouot, July 7, 1921, lot 7 (ill.), as Auvers-sur-Oise Vue panoramique du village, sold for 65,500 francs [according to Annuaire des Ventes, vol. 3, Paris, 1920\/21 and Bulletin de l\u2019Art Ancien et Moderne, vol. 23, no. 672, August 10, 1921].  Hector Brame, Paris [according to Rewald 1996].  Durand-Ruel, Paris and New York [stock no. 4703 and no. 11906, based on labels on reverse and Registrar archival card, copy in curatorial file].  Annie S. Coburn (died 1932), Chicago by 1932; bequeathed to the Art Institute, 1932.",
                      "publishing_verification_level":"Web Cataloged",
                      "internal_department_id":14,
                      "fiscal_year":1940,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":true,
                      "is_zoomable":true,
                      "max_zoom_window_size":-1,
                      "copyright_notice":null,
                      "has_multimedia_resources":false,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":0,
                      "color":{
                         "h":99,
                         "l":41,
                         "s":8,
                         "percentage":0.0023331340875166347,
                         "population":2799
                      },
                      "latitude":41.878737688382,
                      "longitude":-87.6220892194,
                      "latlon":"41.878737688382,41.878737688382",
                      "is_on_view":false,
                      "on_loan_display":"<p>On loan to Tate Modern in London for <i>Cezanne<\/i><\/p>",
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Painting",
                      "artwork_type_id":1,
                      "department_title":"Painting and Sculpture of Europe",
                      "department_id":"PC-10",
                      "artist_id":40482,
                      "artist_title":"Paul Cezanne",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         40482
                      ],
                      "artist_titles":[
                         "Paul Cezanne"
                      ],
                      "category_ids":[
                         "PC-10"
                      ],
                      "category_titles":[
                         "Painting and Sculpture of Europe"
                      ],
                      "term_titles":[
                         "painting",
                         "Impressionism",
                         "oil paint (paint)",
                         "Century of Progress",
                         "european painting",
                         "weather\/seasons",
                         "landscapes",
                         "world's fairs",
                         "Chicago World's Fairs"
                      ],
                      "style_id":"TM-7543",
                      "style_title":"Impressionism",
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         "TM-7543"
                      ],
                      "style_titles":[
                         "Impressionism"
                      ],
                      "classification_id":"TM-9",
                      "classification_title":"painting",
                      "alt_classification_ids":[
                         "TM-54"
                      ],
                      "classification_ids":[
                         "TM-9",
                         "TM-54"
                      ],
                      "classification_titles":[
                         "painting",
                         "european painting"
                      ],
                      "subject_id":"TM-12169",
                      "alt_subject_ids":[
                         "TM-10095",
                         "TM-8657",
                         "TM-11299",
                         "TM-12176"
                      ],
                      "subject_ids":[
                         "TM-12169",
                         "TM-10095",
                         "TM-8657",
                         "TM-11299",
                         "TM-12176"
                      ],
                      "subject_titles":[
                         "Century of Progress",
                         "weather\/seasons",
                         "landscapes",
                         "world's fairs",
                         "Chicago World's Fairs"
                      ],
                      "material_id":"TM-2451",
                      "alt_material_ids":[
                         
                      ],
                      "material_ids":[
                         "TM-2451"
                      ],
                      "material_titles":[
                         "oil paint (paint)"
                      ],
                      "technique_id":null,
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         
                      ],
                      "technique_titles":[
                         
                      ],
                      "theme_titles":[
                         
                      ],
                      "image_id":"90bc0cec-0d4e-9af5-3912-52a082a428e5",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         
                      ],
                      "sound_ids":[
                         
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1933.422"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Auvers, Panoramic View"
                            ],
                            "weight":18611,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T00:30:01-06:00",
                      "updated_at":"2022-12-12T00:31:40-06:00",
                      "timestamp":"2022-12-12T10:29:15-06:00"
                   },
                   {
                      "id":16487,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/16487",
                      "is_boosted":true,
                      "title":"The Bay of Marseille, Seen from L'Estaque",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBgAFAPQAAHx2X15rbk1le1dsfV1wdm9xaWpybnd1YX58ZmRscWJwdIJ1XoJ5Yox\/ZZSJb5mIa1NqgVpxiXWDiXeDiHqGjX+Mk4OSmoWTmIqeoo2fpIyeppekoJSlqJmnqAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYINdlGrZdVkVJk6EMAhQ1QJEEhPMcC4OEADs=",
                         "width":12821,
                         "height":10275,
                         "alt_text":"Impressionist sea landscape, tan houses, blue ocean, distant mountains."
                      },
                      "main_reference_number":"1933.1116",
                      "has_not_been_viewed_much":false,
                      "boost_rank":null,
                      "date_start":1880,
                      "date_end":1890,
                      "date_display":"c. 1885",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Paul Cezanne\nFrench, 1839-1906",
                      "place_of_origin":"France",
                      "dimensions":"80.2 \u00d7 100.6 cm (31 5\/8 \u00d7 39 5\/8 in.)",
                      "medium_display":"Oil on canvas",
                      "inscriptions":null,
                      "credit_line":"Mr. and Mrs. Martin A. Ryerson Collection",
                      "catalogue_display":"<p>Rewald 626<\/p>",
                      "publication_history":"F. Jourdain, C\u00e9zanne (Paris, 1914), pl. 42.\n\nJ. Gasquet, \u201cCe qu\u2019il m\u2019a dit\u2026le motif,\u201d L\u2019Amour de l\u2019Art 1, 8 (December 1920), p. 263 (ill.).\n\nA. Fontainas and L. Vauxcelles, Histoire g\u00e9n\u00e9rale de l\u2019art fran\u00e7ais (Paris, 1922), p. 235.\n\nDaniel Catton Rich, \u201cPoussin and C\u00e9zanne,\u201d Bulletin of The Art Institute of Chicago 24 (December 1930), pp. 114-117 (ill.).\n\nClarence Bulliet, Art Masterpieces vol. 1 (Chicago, 1933), p. 91.\n\nClarence Bulliet, Significant Moderns and Their Pictures (New York, 1936), pl. 14.\n\nJohn Rewald in Amour de l\u2019Art (May 1936), fig. 105.\n\nLionello Venturi, C\u00e9zanne: son art \u2013 son oeuvre (Paris, 1936), vol. 1, no. 493, vol. 2, pl. 115.\n\nBernard Dorival, C\u00e9zanne (New York, 1948), pl. 77.\n\nJosephine Hancock Logan, Sanity in Art (Chciago, 1937), p. 106 (ill.).\n\nBernard Dorival, C\u00e9zanne (New York, 1948), p. 76 (ill.).\n\nH. F. MacKenzie, Masterpieces of Painting, XIX Century, in the Collections of The Art Institute of Chicago (Chicago, 1946), pp. 26-27 (ill.).\n\nTheodore Rousseau, Jr., \u201cC\u00e9zanne, 1839-1906,\u201d Journal of the American Association of University Women 46, 2 (January 1953), pp. 75-77.\n\nThe Art Institute of Chicago, A Brief Guide to the Collections (The Art Institute of Chicago, 1956), p. 36.\n\nThe Art Institute of Chicago, Paintings in The Art Institute of Chicago: A Catalogue of the Picture Collection (Chicago, 1961), pp. 72, 291 (ill.).\n\nFrederick A. Sweet, \u201cGreat Chicago Collectors,\u201d Apollo 84 (September 1966), p. 202.\n\nRen\u00e9 Huyghe, La Rel\u00e8ve du reel: impressionnisme, symbolisme (Paris, 1974), p. 195, fig. 171.\n\nDiane Kelder, The Great Book of French Impressionism (New York, 1980), p. 401 (ill.).\n\nMichael Wilson, The Impressionists (Oxford, 1983), pl. 160.\n\nPaul C\u00e9zanne, exh. cat. (Madrid, Museo Epa\u00f1ol de Arte Conempor\u00e1neo, 1984), p. 234.\n\nBob Niss, \u201cPayson shows 2 \u2018gems\u2019,\u201d Portland, Maine, Evening Express (June 7, 1985), p. 10.\n\nRichard R. Brettell, Post-Impressionists (Chicago, 1987), pp. 41-42, ill., 117.\n\nThe Impressionist Tradition: Masterpieces from The Art Institute of Chicago, exh. cat. (Tokyo, Seibu Museum of Art, 1986-87), p. 17.\n\nRichard Verdi, C\u00e9zanne (London, 1992), p. 127 (ill.).\n\nHerbert Henkels, \u201cC\u00e9zanne en Van Gogh in het Rijksmuseum voor Moderne Kunst in Amsterdam: de collectie van Cornelis Hoogendijk (1866-1911),\u201d Bulletin van het Rijksmuseum 41, 3-4 (1993), p. 221 (ill.).\n\nIsabelle Cahn, Paul C\u00e9zanne: L\u2019art et la mani\u00e8re (Paris, 1994), p. 65 (ill.).\n\nJohn Rewald, The Paintings of Paul C\u00e9zanne: A Catalogue Raisonn\u00e9 (New York, 1996), vol. 1, p. 57, pl. 51, p. 412, no. 626, vol. 2., p. 211 (ill.).\n\nPhilip Conisbee and Denis Coutagne, C\u00e9zanne in Provance, exh. cat. (Washington: National Gallery of Art; Aix-en-Provence: Mus\u00e9e Granet; Paris: Reunion de mus\u00e9es nationaux, 2006), 15, 55, 134\u201335, 154 cat. 49, 319.\n\nThe Age of Impressionism at the Art Institute of Chicago (New Haven and London, 2008), cat. 63, pp. 134\u201335 (ill.).\nKatherine Sachs, \"Cezanne and Marden: The Almost Perfect Painting,\" C\u00e9zanne and Beyond, Exh, cat (Philadelphia Museum of Art,  2009), Pl. 197, p. 502.\n\nAchim Borchardt-Hume, Gloria Groom, Caitlin Haskell and Natalia Sidlina, eds., Cezanne, exh. cat. (Chicago: Art Institute of Chicago, 2022), 38, 151 cat. 79.",
                      "exhibition_history":"Amsterdam, Stedelijk Museum, Moderne Kunst Kring, 1911, no cat. no.\n\nHamburg, Galerie Commeter, 1921, no cat. no.\n\nNew York, Museum of Modern Art, First Loan Exhibition, C\u00e9zanne, Gauguin, Seurat, Van Gogh, November 1929, cat. 18 (ill.).\n\nThe Art Institute of Chicago, A Century of Progress, Exhibition of Paintings and Sculpture, June 1-November 1, 1933, cat. 309 (ill.).\n\nPhiladelphia, Pennsylvania Museum of Art, C\u00e9zanne, 1934, cat. 26.\n\nThe Art Institute of Chicago, A Century of Progress, Exhibition of Paintings and Sculpture, June 1-November 1, 1934, cat. 293.\n\nThe Art Institute of Chicago, Masterpiece of the Month, June 1942, no cat.\n\nThe Art Institute of Chicago, C\u00e9zanne: Paintings, Watercolors, and Drawings: A Loan Exhibition, February 1-March 16, 1952, cat. 50 (ill.), traveled to New York, Metropolitan Museum of Art, April 4-May 18, 1952.\n\nSeattle World\u2019s Fair, Masterpieces of Art, April 21-September 4, 1962, cat. 50 (ill.).\n\nWashington, D. C., The Phillips Collection, C\u00e9zanne: An Exhibition in Honor of the Fiftieth Anniversary of the Phillips Collection, February 27-March 28, 1971, cat. 21 (ill.), traveled to The Art Institute of Chicago, April 17-May 16, 1971 and Boston, Museum of Fine Arts, June 1-July 3, 1971.\n\nThe Art Institute of Chicago, The Artist Looks at the Landscape, June 22-August 25, 1974, no cat.\n\nAlbi, Mus\u00e9e Toulouse-Lautrec, Tr\u00e9sors impressionnistes du Mus\u00e9e de Chicago, June 27-August 31, 1980, cat. 35 (ill.).\n \nLos Angeles County Museum of Art, A Day in the Country: Impressionism and the French Landscape, June 28-September 16, 1984, cat. 129 (ill.), traveled to The Art Institute of Chicago, October 23, 1984-January 6, 1985 and Paris, Galeries nationales du Grand Palais, February 8-April 22, 1985.\n\nPortland, Westbrook College, Joan Whitney Payson Gallery, May 1-September 29, 1985, no cat.\n\nEdinburgh, National Gallery of Scotland, C\u00e9zanne and Poussin: The Classical Vision of Landscape, August 9-October 21, 1990, cat. 45 (ill.).\n\nParis, Galeries nationales du Grand Palais, C\u00e9zanne, September 25, 1995-January 7, 1996, cat. 114; London, Tate Gallery, February 8-April 28, 1996; Philadelphia Museum of Art, May 26-August 18, 1996.\n\nSt. Petersburg, The State Hermitage Museum, C\u00e9zanne and the Russian Avant-Garde of the XX Century, August 8-September 24, 1998, cat. 20 (ill.); Moscow, The Pushkin State Museum of Fine Arts, October 5-November 15, 1998.\n\nWashington, DC, National Gallery of Art, C\u00e9zanne in Provence, January 29\u2013May 7, cat. 49, 2006; Aix-en-Provence, Mus\u00e9e Granet, June 9\u2013September 7, 2006.\n\nNew York, Metropolitan Museum of Art, C\u00e9zanne to Picasso Ambroise Vollard, Patron of the Avant-Garde, September 13, 2006-January 7, 2007, cat. 37 (ill.); Art Institute of Chicago, February 17-May 13, 2007; Paris, Mus\u00e9e d\u2019Orsay, June 18-Spetember 16, 2007. \n\nFort Worth, Tex., Kimbell Museum of Art, The Impressionists: Master Paintings from the Art Institute of Chicago, June 29\u2013November 2, 2008, cat. 63 (ill.).\n\nPhiladelphia, PA, Philadelphia Museum of Art, C\u00e9zanne and Beyond, February 9- May 6 2009, Plate 197.\n\nArt Institute of Chicago, Cezanne, May 15-Sep. 5, 2022, cat. 79; London, Tate, Oct. 5, 2022-Mar. 12, 2023.",
                      "provenance_text":"Bought from the artist by Ambroise Vollard, Paris ca. 1899 [according to New York 2006-7]; sold to Cornelis Hoogendijk (died 1911), Amsterdam, possibly in May 1899 [according to New York 2006-7, see Mus\u00e9e d\u2019Orsay, Fonds Vollard, MS 421 (4,3) fol 31, May 17, 1899, copy in curatorial file]; by descent to Hoogendijk's heirs and on deposit at the Rijksmuseum, Amsterdam [see Henkels 1993]; sold in shares to Paul Rosenberg, Jos Hessel, and Durand-Ruel, Paris, 1920 [according to New York 2006-7]; sold through Jos Hessel to Martin A. Ryerson (died 1932), Chicago on June 12, 1920 [see purchase receipt, copy in curatorial file]; bequeathed to the Art Institute, 1933.",
                      "publishing_verification_level":"Web Cataloged",
                      "internal_department_id":14,
                      "fiscal_year":1933,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":true,
                      "is_zoomable":true,
                      "max_zoom_window_size":-1,
                      "copyright_notice":null,
                      "has_multimedia_resources":false,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":0,
                      "color":{
                         "h":194,
                         "l":58,
                         "s":10,
                         "percentage":0.0017550281994393705,
                         "population":2312
                      },
                      "latitude":null,
                      "longitude":null,
                      "latlon":null,
                      "is_on_view":false,
                      "on_loan_display":"<p>On loan to Tate Modern in London for <i>Cezanne<\/i><\/p>",
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Painting",
                      "artwork_type_id":1,
                      "department_title":"Painting and Sculpture of Europe",
                      "department_id":"PC-10",
                      "artist_id":40482,
                      "artist_title":"Paul Cezanne",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         40482
                      ],
                      "artist_titles":[
                         "Paul Cezanne"
                      ],
                      "category_ids":[
                         "PC-10",
                         "PC-831"
                      ],
                      "category_titles":[
                         "Painting and Sculpture of Europe",
                         "Essentials"
                      ],
                      "term_titles":[
                         "oil on canvas",
                         "oil painting",
                         "Post-Impressionism",
                         "oil paint (paint)",
                         "Century of Progress",
                         "painting (image making)",
                         "painting",
                         "european painting",
                         "water",
                         "weather\/seasons",
                         "landscapes",
                         "world's fairs",
                         "Chicago World's Fairs"
                      ],
                      "style_id":"TM-7547",
                      "style_title":"Post-Impressionism",
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         "TM-7547"
                      ],
                      "style_titles":[
                         "Post-Impressionism"
                      ],
                      "classification_id":"TM-66",
                      "classification_title":"oil on canvas",
                      "alt_classification_ids":[
                         "TM-9",
                         "TM-54"
                      ],
                      "classification_ids":[
                         "TM-66",
                         "TM-9",
                         "TM-54"
                      ],
                      "classification_titles":[
                         "oil on canvas",
                         "painting",
                         "european painting"
                      ],
                      "subject_id":"TM-12169",
                      "alt_subject_ids":[
                         "TM-8681",
                         "TM-10095",
                         "TM-8657",
                         "TM-11299",
                         "TM-12176"
                      ],
                      "subject_ids":[
                         "TM-12169",
                         "TM-8681",
                         "TM-10095",
                         "TM-8657",
                         "TM-11299",
                         "TM-12176"
                      ],
                      "subject_titles":[
                         "Century of Progress",
                         "water",
                         "weather\/seasons",
                         "landscapes",
                         "world's fairs",
                         "Chicago World's Fairs"
                      ],
                      "material_id":"TM-2451",
                      "alt_material_ids":[
                         
                      ],
                      "material_ids":[
                         "TM-2451"
                      ],
                      "material_titles":[
                         "oil paint (paint)"
                      ],
                      "technique_id":"TM-4273",
                      "alt_technique_ids":[
                         "TM-3891"
                      ],
                      "technique_ids":[
                         "TM-4273",
                         "TM-3891"
                      ],
                      "technique_titles":[
                         "oil painting",
                         "painting (image making)"
                      ],
                      "theme_titles":[
                         "Essentials"
                      ],
                      "image_id":"d4ca6321-8656-3d3f-a362-2ee297b2b813",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         
                      ],
                      "sound_ids":[
                         
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_boosted":"The Bay of Marseille, Seen from L'Estaque",
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1933.1116"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "The Bay of Marseille, Seen from L'Estaque"
                            ],
                            "weight":38063,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T00:30:01-06:00",
                      "updated_at":"2022-12-12T00:31:39-06:00",
                      "timestamp":"2022-12-12T10:29:15-06:00"
                   },
                   {
                      "id":18751,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/18751",
                      "is_boosted":false,
                      "title":"Bust of Said Abdullah of the Darfour People",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBAAFAPQAACQpJiguLS4yMjM2NTQ5Ojg8OTxAQkdLSURJTGdnY2RnZHFzb3l7eoKDgYSEgomLjY2Oj5GRjsfGwsbFxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoOQ0UwQI0KEMz1IQTGIgQQgAOw==",
                         "width":1795,
                         "height":2250,
                         "alt_text":"A work made of bronze."
                      },
                      "main_reference_number":"1963.839",
                      "has_not_been_viewed_much":false,
                      "boost_rank":null,
                      "date_start":1848,
                      "date_end":1848,
                      "date_display":"1848",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Charles Henri Joseph Cordier\nFrench, 1827-1905\nCast by: Eck et Durand Fondeur\nFrench, 19th century",
                      "place_of_origin":"France",
                      "dimensions":null,
                      "medium_display":"Bronze",
                      "inscriptions":"Inscribed:  CH. CORDIER 1848",
                      "credit_line":"Ada Turnbull Hertle Endowment",
                      "catalogue_display":null,
                      "publication_history":"\"R. & M. Andrade,\" Apollo 121, 423 (1960), p. x.\n\nArt Institute of Chicago, Annual Report, 1963-64, p. 19.\n\nJohn Maxon, Art Institute of Chicago Quarterly 58, 1 (1964).\n\nS. R\u00e9veilluad Kriz, L'Odyss\u00e9e d'un peintre: Drouet R\u00e9veilluad (Paris: Fischbacher, 1973), p. 17.\n\nInstitut f\u00fcr Auslandsbeziehungen, W\u00fcrttembergischer Kunstverein, Exotische Welten, Europ\u00e4sische phantasien (1987), pp. 357, 491, no. 3.62.\n\nNew York, Charles Janoray, LLC, A Golden Age of French Sculpture, 1850-1900 (2003), p. 40, fig. 1.\n\nParis, Mus\u00e9e d'Orsay, Charles Cordier, 1827-1905: l'autre et l'ailleurs (2004), pp. 15, 18, 205, no. 474.\n\nFor comparison, see:\n\nStanislas Lami, Dictionnaire des sculpteurs de l\u2019\u00e9cole Francaise au dix-neuvi\u00e9me si\u00e8cle 1, reprint (Liechtenstein, 1970), p. 417.\n\nHugh Honour, The Image of the Black in Western Art IV, 2 (Cambridge, MA, 1976-1989), pp. 100-02, fig. 72.\n\nJeannine Durand-Revillon, \"Un promoteur de la sculpture polychrome sous le Second Empire, Charles-Henri-Joseph Cordier (1827-1905),\" Soc. Hist. Art Francais (1982), pp. 182, 192, fig. 1.\n\nHermann Pollig, et al, Exotische Welten, Europ\u00e4sische Phantasien (Stuttgart, 1987), pp. 357, 374, 491, no. 3.61.\n\nAntoinette Le Normand-Romain, et al, La Sculpture ethnographique, de la V\u00e9nus hottentote \u00e0 la Tehura de Gauguin (Paris, 1994), p. 55, no. 33.\n\nElyse Nelson and Wendy S. Walters, eds., Fictions of Emancipation: Carpeaux's Why Born Enslaved! Reconsidered, exh. cat. (New Haven and London: Yale University Press, 2022), 50, 53, pl. 29, 67-9, 94.",
                      "exhibition_history":"New York, The Metropolitan Museum of Art, Fictions of Emancipation: Carpeaux's Why Born Enslaved! Reconsidered, Mar. 7, 2022-Mar. 5, 2023, pl. 29.",
                      "provenance_text":"Cast in Paris, 1848 and believed to be the original pair cast for the artist [see letter from Gerald Kerin in curatorial object file]; possibly sold directly by the artist to an English private collector in Devon, 1851 [according to letter from William Redford, in curatorial file; Cordier brought ethnographic busts to the 1862 London Exposition, see Exotische Welten, p. 357]; purchased from this collection by William Redford, the agent for Gerald Kerin, Ltd. [see same letter in curatorial file]; sold by Gerald Kerin, Ltd. to the Art Institute, 1963.",
                      "publishing_verification_level":"Web Cataloged",
                      "internal_department_id":14,
                      "fiscal_year":1964,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":true,
                      "is_zoomable":true,
                      "max_zoom_window_size":-1,
                      "copyright_notice":null,
                      "has_multimedia_resources":true,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":4.6216,
                      "color":{
                         "h":204,
                         "l":37,
                         "s":3,
                         "percentage":0.10334663359574392,
                         "population":920
                      },
                      "latitude":41.8798421106219,
                      "longitude":-87.6233076676725,
                      "latlon":"41.879842110622,41.879842110622",
                      "is_on_view":false,
                      "on_loan_display":"<p>On loan to The Metropolitan Museum of Art in New York City for <i>Fictions of Emancipation: Carpeaux Recast<\/i><\/p>",
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Sculpture",
                      "artwork_type_id":3,
                      "department_title":"Painting and Sculpture of Europe",
                      "department_id":"PC-10",
                      "artist_id":5301,
                      "artist_title":"Charles Henri Joseph Cordier",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         5301
                      ],
                      "artist_titles":[
                         "Charles Henri Joseph Cordier"
                      ],
                      "category_ids":[
                         "PC-10"
                      ],
                      "category_titles":[
                         "Painting and Sculpture of Europe"
                      ],
                      "term_titles":[
                         "bust\/head",
                         "bronze",
                         "copper alloy",
                         "nonferrous metal",
                         "metal",
                         "inorganic material",
                         "sculpture"
                      ],
                      "style_id":null,
                      "style_title":null,
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         
                      ],
                      "style_titles":[
                         
                      ],
                      "classification_id":"TM-347",
                      "classification_title":"bust\/head",
                      "alt_classification_ids":[
                         "TM-13"
                      ],
                      "classification_ids":[
                         "TM-347",
                         "TM-13"
                      ],
                      "classification_titles":[
                         "bust\/head",
                         "sculpture"
                      ],
                      "subject_id":null,
                      "alt_subject_ids":[
                         
                      ],
                      "subject_ids":[
                         
                      ],
                      "subject_titles":[
                         
                      ],
                      "material_id":"TM-2430",
                      "alt_material_ids":[
                         "TM-2694",
                         "TM-2683",
                         "TM-2568",
                         "TM-2600"
                      ],
                      "material_ids":[
                         "TM-2430",
                         "TM-2694",
                         "TM-2683",
                         "TM-2568",
                         "TM-2600"
                      ],
                      "material_titles":[
                         "bronze",
                         "copper alloy",
                         "nonferrous metal",
                         "metal",
                         "inorganic material"
                      ],
                      "technique_id":null,
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         
                      ],
                      "technique_titles":[
                         
                      ],
                      "theme_titles":[
                         
                      ],
                      "image_id":"6a0e3e40-1e36-2109-378f-3fc5d29176b3",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         "cb00e703-1452-422c-b2cc-72857a172537"
                      ],
                      "sound_ids":[
                         "cb00e703-1452-422c-b2cc-72857a172537"
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1963.839"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Bust of Said Abdullah of the Darfour People"
                            ],
                            "weight":7220,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T00:30:01-06:00",
                      "updated_at":"2022-12-12T00:31:38-06:00",
                      "timestamp":"2022-12-12T10:29:15-06:00"
                   },
                   {
                      "id":16564,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/16564",
                      "is_boosted":false,
                      "title":"Branch of the Seine near Giverny (Mist)",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBQAFAPQAAG5xiHJ2iXJ2jXl6k4CCmYWImZCSqpSWr5ubr46OsZuds5qata6nrqamt6ymsaimt6emubausbOstbuzuLiyvKutxK+wxbGww6+00AAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUVICAUERMQiPQMB2ZVyXJRkKE0kxMCADs=",
                         "width":5253,
                         "height":5097,
                         "alt_text":"Painting of softly rendered shapes in pale blue, green, and white. A textured green mass at left resembles foliage. Blue and white cloud-like forms fill the rest of the frame."
                      },
                      "main_reference_number":"1933.1156",
                      "has_not_been_viewed_much":false,
                      "boost_rank":null,
                      "date_start":1897,
                      "date_end":1897,
                      "date_display":"1897",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Claude Monet\nFrench, 1840-1926",
                      "place_of_origin":"France",
                      "dimensions":"89.9 \u00d7 92.7 cm (35 3\/8 \u00d7 36 1\/2 in.)",
                      "medium_display":"Oil on canvas",
                      "inscriptions":"Inscribed lower left: Claude Monet 97",
                      "credit_line":"Mr. and Mrs. Martin A. Ryerson Collection",
                      "catalogue_display":"<p>Wildenstein, Claude Monet, cat rais. 1996 1475<\/p><p>Wildenstein, Claude Monet, biographie et catalogue raisonn\u00e9, 1979 1475<\/p>",
                      "publication_history":"Durand-Ruel Galleries, New York, Paintings by Claude Monet, exh. cat. (Durand-Ruel, 1916), cat. 10.\n\nArt Institute of Chicago, A Guide to the Paintings in the Permanent Collection (Art Institute of Chicago, 1925), p. 162, cat. 2138. \n\nM. C., \u201cMonets in the Art Institute,\u201d Bulletin of the Art Institute of Chicago 19, 2 (Feb. 1925), p. 20.\n\nToledo (Ohio) Museum of Art, Paintings by French Impressionists and Post-Impressionists, exh. cat. (Toledo Museum of Art, 1937), cat. 15.\n\nParke-Bernet Galleries, New York, Valuable Paintings by Modern French and Barbizon Artists and Renaissance Master, Property of a Mid-Western Educational Institution, pt. 2, sale cat. (Parke-Bernet Galleries, May 4, 1944), p. 34, lot 47.\n\n\u201cNews Notes,\u201d Magazine of Art, Akron (Ohio) Art Institute Edition (Nov. 1946), p. iii.\n\nOscar Reutersw\u00e4rd, Monet: En konstn\u00e4rshistorik (Bonniers, 1948), p. 283.\n\nArt Institute of Chicago, \u201cHomage to Claude Monet,\u201d Art Institute of Chicago Quarterly 51, 2 (Apr. 1, 1957), p. 24.\n\nArt Institute of Chicago, \u201cCatalogue,\u201d Art Institute of Chicago Quarterly 51, 2 (Apr. 1, 1957), p. 33.\n\nArt Institute of Chicago, Paintings in the Art Institute of Chicago: A Catalogue of the Picture Collection (Art Institute of Chicago, 1961), p. 321.\n\nGrace Seiberling, \u201cThe Evolution of an Impressionist,\u201d in Paintings by Monet, ed. Susan Wise, exh. cat. (Art Institute of Chicago, 1975), p. 37.\n\nSusan Wise, ed., Paintings by Monet, exh. cat. (Art Institute of Chicago, 1975), p. 156, cat. 99 (ill.).\n\nGrace Seiberling, \u201cMonet\u2019s Series\u201d (Ph.D. diss., Yale University, 1976), pp. 189; 335, n. 1.\n\nDaniel Wildenstein, Claude Monet: Biographie et catalogue raisonn\u00e9, vol. 3, Peintures, 1887\u20131898 (Biblioth\u00e8que des Arts, 1979), pp. 210; 211, cat. 1475 (ill.).\n\nCharles F. Stuckey, ed., Monet: A Retrospective (Hugh Lauter Levin, 1985), p. 183 (ill.).\n\nGrace Seiberling, Monet in London, exh. cat. (High Museum of Art\/University of Washington Press, 1988), p. 14, fig. 9.\n\nRichard Kendall, ed., Monet by Himself: Paintings, Drawings, Pastels, Letters, trans. Bridget Strevens Romer (Macdonald Orbis, 1989), pp. 221 (ill.), 320.\n\nPaul Hayes Tucker, Monet in the \u201990s: The Series Paintings, exh. cat. (Museum of Fine Arts, Boston\/Yale University Press, 1989), pp. 219; 220, pl. 82; 223; 299, cat. 78.\n\nMartha Kapos, ed., The Impressionists: A Retrospective (Hugh Lauter Levin\/Macmillan, 1991), p. 31 (ill.).\n\nMartha Kapos, ed., The Post-Impressionists: A Retrospective (Hugh Lauter Levin\/Macmillan, 1993), p. 41, pl. 9.\n\nNatasha Staller, \u201cBabel: Hermetic Languages, Universal Languages and Anti-Languages in Fin de Si\u00e8cle Parisian Culture,\u201d Art Bulletin 76, 2 (June 1994), p. 338, fig. 8.\n\nAndrew Forge, Monet, Artists in Focus (Art Institute of Chicago, 1995), pp. 53\u201355; 94, pl. 23; 108.\n\nCharles F. Stuckey, with the assistance of Sophia Shaw, Claude Monet, 1840\u20131926, exh. cat. (Art Institute of Chicago\/Thames & Hudson, 1995), pp. 129, cat. 108 (ill.); 230; 247.\n\nPaul Hayes Tucker, Claude Monet: Life and Art (Yale University Press, 1995), pp. 158; 162, pl. 185.\n\nDaniel Wildenstein, Monet: Catalogue raisonn\u00e9\/Werkverzeichnis, vol. 3, Nos. 969\u20131595 (Taschen\/Wildenstein Institute, 1996), pp. 613, cat. 1475 (ill.); 614.\n\nSimonella Condemi and Andrew Forge, Claude Monet: La poesia della luce; Sette capolavori dell\u2019Art Institute di Chicago a Palazzo Pitti, exh. cat. (Giunti, 1999), pp. 42 (detail), 43 (ill.).\n\nArt Institute of Chicago, Impressionism and Post-Impressionism in the Art Institute of Chicago, selected by James N. Wood (Art Institute of Chicago\/Hudson Hills, 2000), p. 153 (ill.).\n\nCharles Stuckey, \u201cMonet e la Senna,\u201d in Monet: I luoghi della pittura, ed. Marco Goldin, exh. cat. (Linea d\u2019Ombra, 2001), p. 63 (ill.).\n\nDario Gamboni, Potential Images: Ambiguity and Indeterminacy in Modern Art (Reaktion, 2002), pp. 109; 111, ill. 81; 113; 170; 297.\n\nChristoph Becker, \u201cMonet\u2019s Garten,\u201d in Monet\u2019s Garten, ed. Christoph Becker, exh. cat. (Kunsthaus Z\u00fcrich\/Hatje Cantz, 2004), pp. 60; 62, cat. 34 (ill.). Translated by Fiona Elliot as \"Monet\u2019s Garden,\u201d in Monet\u2019s Garden, ed. Christoph Becker, exh. cat. (Kunsthaus Z\u00fcrich\/Hatje Cantz, 2004), pp. 60; 62, cat. 34 (ill.).\n\nChristopher Butler, Pleasure and the Arts: Enjoying Literature, Painting, and Music (Oxford University Press, 2004), pp. 94; pl. 5; 232.\n\nNicolas de Warren, \u201cAd Infinitum: Boredom and the Play of Imagination,\u201d in Infinite Possibilities: Serial Imagery in 20th-Century Drawings, exh. cat. (Davis Museum and Cultural Center\/University of Washington Press, 2004), p. 11, fig. 6.\n\nMarco Goldin, ed., Monet, la Senna, le ninfee: Il grande fiume e il nuovo secolo, exh. cat. (Linea d\u2019Ombra, 2004), pp. 118\u201319 (ill.).\n\nGloria Groom and Douglas Druick, with the assistance of Dorota Chudzicka and Jill Shaw, The Impressionists: Master Paintings from the Art Institute of Chicago, exh. cat. (Art Institute of Chicago\/Kimbell Art Museum, 2008), pp. 160\u201361, cat. 81 (ill.); 163; 167. Simultaneously published as Gloria Groom and Douglas Druick, with the assistance of Dorota Chudzicka and Jill Shaw, The Age of Impressionism at the Art Institute of Chicago (Art Institute of Chicago\/Yale University Press, 2008), pp. 160\u201361, cat. 81 (ill.); 163; 167.\n\nPascal Bonafoux, Monet, peintre de l\u2019eau (Ch\u00eane\/Hachette, 2010), pp. 136 (ill.), 174.\n\n\u201cCat. 36: Branch of the Seine near Giverny (Mist), from the series \u2018Mornings on the Seine,\u2019 1897\u201d in Monet Paintings and Drawings at the Art Institute of Chicago, ed. Gloria Groom and Jill Shaw (Art Institute of Chicago, 2014), <a href=\"https:\/\/publications.artic.edu\/monet\/reader\/paintingsanddrawings\/section\/135470\">https:\/\/publications.artic.edu\/monet\/reader\/paintingsanddrawings\/section\/135470<\/a>.\n\nHelga Kessler Aurisch and Tanya Paul, Monet and the Seine: Impressions of a River, exh. cat. (Houston: Museum of Fine Arts, 2014), 42, 45, 140-141 cat. 44, 144.\n\nGloria Groom, et. al. Monet and Chicago, exh. Cat. (Chicago: Art Institute, 2020), 109 cat. 66, 139.\n\nMarkus Fellinger, Edwin Becker, Lisa Smit, Renske Suijver, eds.,  Klimt. Inspired by Van Gogh, Rodin, Matisse, exh. cat. (Munich: Hirmer Verlag Gmbh, 2022), 77, 78 cat. 57, 235.",
                      "exhibition_history":"Paris, Galerie George Petit, Exposition Claude Monet, June\u2013July 1898. \n\nNew York, Durand-Ruel, Paintings by Claude Monet, Dec. 9\u201323, 1916, cat. 10, as Matin\u00e9e sur la Seine. \n\nToledo (Ohio) Museum of Art, Paintings by French Impressionists and Post-Impressionists, Nov. 7\u2013Dec. 12, 1937, cat. 15 (ill.).\n\nAkron (Ohio) Art Institute, Oct. 18, 1946\u2013Nov. 10, 1947, no cat. \n\nBoston, Mass., Richard C. Morrison, Nov. 19, 1948\u2013Dec. 26, 1950, no cat.\n\nArt Institute of Chicago, The Paintings of Claude Monet, Apr. 1\u2013June 15, 1957, no cat. no. \n\nArt Institute of Chicago, The Artist Looks at the Landscape, June 22\u2013Aug. 25, 1974, no cat. \n\nArt Institute of Chicago, Paintings by Monet, Mar. 15\u2013May 11, 1975, cat. 99 (ill.). \n\nBoston, Museum of Fine Arts, Monet in the \u201990s: The Series Paintings, February 7\u2013April 29, 1990, cat. 78 (ill.); Art Institute of Chicago, May 19\u2013August 12, 1990; London, Royal Academy of Arts, September 7\u2013December 9, 1990 [Boston and Chicago only].\n\nArt Institute of Chicago, Claude Monet, 1840\u20131926, July 22\u2013Nov. 26, 1995, cat. 108 (ill.).\n\nFlorence, Sala Bianca di Palazzo Pitti, Claude Monet: La poesia della luce; Sette capolavori dell\u2019Art Institute di Chicago a Palazzo Pitti, June 2\u2013Aug. 29, 1999, no cat. no. (ill.).\n\nZurich, Kunsthaus Z\u00fcrich, Monet\u2019s Garten, Oct. 29, 2004\u2013Mar. 13, 2005, cat. 34 (ill.). \n\nFort Worth, Tex., Kimbell Art Museum, The Impressionists: Master Paintings from the Art Institute of Chicago, June 29\u2013Nov. 2, 2008, cat. 81 (ill.).\n\nTulsa, OK, Philbrook Museum of Art, Monet and the Seine: Impressions of a River, June 29-September 21, 2014; Museum of Fine Arts, Houston, October 26, 2014-February 1, 2015, cat. 44 (ill.).\n\nArt Institute of Chicago, Monet and Chicago, September 5, 2020-June 14, 2021, cat. 66.\n\nAmsterdam, Van Gogh Museum, Golden Boy Gustave Klimt. Inspired by Van Gogh, Rodin, Matisse..., Oct. 7, 2022-Jan. 8, 2023, cat. 57; Vienna, Osterreichische Galerie, Klimt. Inspired by Van Gogh, Rodin, Matisse\u2026, Feb. 3-May 29, 2023.",
                      "provenance_text":"Jos Hessel, Paris, by Oct. 26, 1916 [this and the following per Durand-Ruel, Paris, stock book for 1913\u201321 (no. 10908, as Matin\u00e9e sur la Seine, 1897), as confirmed by Paul-Louis Durand-Ruel and Flavie Durand-Ruel, Durand-Ruel Archives, to the Art Institute of Chicago, Feb. 5, 2013, curatorial object file; Wildenstein 1996 states this painting was sold by the artist to Durand-Ruel in 1913, which is not mentioned in the Durand-Ruel Archives]; sold to Durand-Ruel, Paris, Oct. 26, 1916, for 20,000 francs; sold to Durand-Ruel, New York, Nov. 6 or Dec. 4, 1916 [per Durand-Ruel, Paris, stock book for 1913\u201321 (no. 10908, as Matin\u00e9e sur la Seine, 1897) states: \u201cSold to DR New York on 6 November 1916.\u201d The New York stock book for 1904\u201324 (no. 4023, as Matin\u00e9e sur la Seine, 1897) states: \u201cPurchased by DR New York on 4 December 1916.\u201d Both confirmed by Paul-Louis Durand-Ruel and Flavie Durand-Ruel to the Art Institute of Chicago, Feb. 5, 2013, curatorial object file]; sold to Martin A. Ryerson, Chicago, Dec. 8, 1916, for $10,000 [per Durand-Ruel, New York, stock book for 1904\u201324 (no. 4023, as Matin\u00e9e sur la Seine, 1897), as confirmed by Paul-Louis Durand-Ruel and Flavie Durand-Ruel, Durand-Ruel Archives, to the Art Institute of Chicago, Feb. 5, 2013, curatorial object file; also a purchase receipt on Durand-Ruel letterhead, dated December 26, 1916, includes this painting as one of several sold by Durand-Ruel, New York, to M. A. Ryerson, photocopy in curatorial object file]; bequeathed to the Art Institute of Chicago, 1933.",
                      "publishing_verification_level":"Web Cataloged",
                      "internal_department_id":14,
                      "fiscal_year":null,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":true,
                      "is_zoomable":true,
                      "max_zoom_window_size":-1,
                      "copyright_notice":null,
                      "has_multimedia_resources":true,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":17.5344,
                      "color":{
                         "h":225,
                         "l":49,
                         "s":12,
                         "percentage":0.12819508856192374,
                         "population":884
                      },
                      "latitude":41.8796079029809,
                      "longitude":-87.6228556606264,
                      "latlon":"41.879607902981,41.879607902981",
                      "is_on_view":false,
                      "on_loan_display":"<p>On loan to Van Gogh Museum in Amsterdam for <i>Klimt. Inspired by Van Gogh, Rodin, Matisse...<\/i><\/p>",
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Painting",
                      "artwork_type_id":1,
                      "department_title":"Painting and Sculpture of Europe",
                      "department_id":"PC-10",
                      "artist_id":35809,
                      "artist_title":"Claude Monet",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         35809
                      ],
                      "artist_titles":[
                         "Claude Monet"
                      ],
                      "category_ids":[
                         "PC-10"
                      ],
                      "category_titles":[
                         "Painting and Sculpture of Europe"
                      ],
                      "term_titles":[
                         "painting",
                         "Impressionism",
                         "landscapes",
                         "oil paint (paint)",
                         "european painting",
                         "weather\/seasons",
                         "water"
                      ],
                      "style_id":"TM-7543",
                      "style_title":"Impressionism",
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         "TM-7543"
                      ],
                      "style_titles":[
                         "Impressionism"
                      ],
                      "classification_id":"TM-9",
                      "classification_title":"painting",
                      "alt_classification_ids":[
                         "TM-54"
                      ],
                      "classification_ids":[
                         "TM-9",
                         "TM-54"
                      ],
                      "classification_titles":[
                         "painting",
                         "european painting"
                      ],
                      "subject_id":"TM-8657",
                      "alt_subject_ids":[
                         "TM-10095",
                         "TM-8681"
                      ],
                      "subject_ids":[
                         "TM-8657",
                         "TM-10095",
                         "TM-8681"
                      ],
                      "subject_titles":[
                         "landscapes",
                         "weather\/seasons",
                         "water"
                      ],
                      "material_id":"TM-2451",
                      "alt_material_ids":[
                         
                      ],
                      "material_ids":[
                         "TM-2451"
                      ],
                      "material_titles":[
                         "oil paint (paint)"
                      ],
                      "technique_id":null,
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         
                      ],
                      "technique_titles":[
                         
                      ],
                      "theme_titles":[
                         
                      ],
                      "image_id":"838d8c33-a3b4-68ea-587b-87ceec2011af",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         
                      ],
                      "sound_ids":[
                         
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         36741912193,
                         37456667489
                      ],
                      "section_titles":[
                         "Cat. 36 \u00a0Branch of the Seine near Giverny (Mist), from the series\u00a0Mornings on the Seine, 1897",
                         "Cats. 42-43 \u00a0V\u00e9theuil, 1901"
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1933.1156"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Branch of the Seine near Giverny (Mist)"
                            ],
                            "weight":24000,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T00:30:01-06:00",
                      "updated_at":"2022-12-12T00:31:38-06:00",
                      "timestamp":"2022-12-12T10:29:15-06:00"
                   },
                   {
                      "id":20347,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/20347",
                      "is_boosted":false,
                      "title":"Portrait of Elsa Glaser",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBAAFAPQAAHlwZaKTgaSYibWlkcK1psi3o8u9q8+9qNPAqNHBrdXDrNfIt9zJst\/PueHQvOLRvePSvePTv+jax+vaxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURIAEIixEMyVQcDaQgjPQ4UQgAOw==",
                         "width":4740,
                         "height":5871,
                         "alt_text":"A work made of graphite, with touches of erasing and stumping, on cream wove paper."
                      },
                      "main_reference_number":"1964.1",
                      "has_not_been_viewed_much":false,
                      "boost_rank":null,
                      "date_start":1914,
                      "date_end":1914,
                      "date_display":"1914",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Henri Matisse\nFrench, 1869-1954",
                      "place_of_origin":"France",
                      "dimensions":"28.5 \u00d7 22.9 cm (11 1\/4 \u00d7 9 1\/16 in.)",
                      "medium_display":"Graphite, with touches of erasing and stumping, on cream wove paper",
                      "inscriptions":"Signed and dated recto, lower left, in graphite: \"Henri-Matisse 1914\"",
                      "credit_line":"Margaret Day Blake Collection",
                      "catalogue_display":null,
                      "publication_history":"Paul Westheim, \u201cGezeichnet oder geknipst?,\u201d Das Kunstblatt 14 (1930), p. 50 (ill.), as Zeichnung von Henri Matisse, 1914.\n\nThe Art Institute of Chicago Quarterly, 58: 1 (1964), unnumbered.\n\nStephen Longstreet, The Drawings of Henri Matisse (Borden Publishing, 1973), n.pag. (ill.), as Portrait of a Young Woman\u2014Elsa Glaser.\n\nBarbara Copeland Buenger, \u201cMax Beckmann\u2019s Artistic Sources: The Artist\u2019s Relation to Older and Modern Traditions,\u201d (Ph.D. diss., Columbia University, 1979), pp. 204\u201305; 377, no. 121; 441, fig. 121, as Portrait of Elsa Glaser, 1914.\n\nJohn Elderfield, The Drawings of Henri Matisse, exh. cat. (London, 1984), p. 71 (ill.), fig. 25.\n\nAndreas Strobl, Curt Glaser: Kunsthistoriker, Kunstkritiker, Sammler: Eine Deutsch-J\u00fcdische Biographie (B\u00f6hlau Verlag, 2006), fig. 6.\n\n\u201cPortrait of Elsa Glaser,\u201d in Matisse Paintings, Works on Paper, Sculpture, and Textiles at the Art Institute of Chicago, ed. Stephanie D\u2019Alessandro (Chicago: Art Institute of Chicago, 2019), cat. 19, <a href=\"https:\/\/publications.artic.edu\/matisse\/reader\/works\/section\/24\/24_anchor\">https:\/\/publications.artic.edu\/matisse\/reader\/works\/section\/24\/24_anchor<\/a>.",
                      "exhibition_history":"Probably Berlin, Reckendorfhaus, Die Kunstblatt-Ausstellung: Gezeichnet oder geknipst?, Feb. 1930, no cat.; Frankfurt, Kunstverein, Apr. 1930; Cologne, Kunstgewerbe-Museum, May 1930; Wiesbaden, Nassauischen Kunstverein, June 20\u2013July 10, 1930.\n\nBaltimore Museum of Art, \"1914: Exhibitions of Paintings, Drawings and Sculpture,\" October 6\u2013November 15, 1964, p. 90, cat. 154.\n\nLos Angeles, University of California Art Galleries, \"Henri Matisse: Retrospective,\" January 5\u2013 February 27, 1966, pp. 147 (ill.), 197, cat. 160; traveled to The Art Institute of Chicago, March 11\u2013April 24, 1966 and  Boston, Museum of Fine Arts, May 11\u2013June 26, 1966\n\nThe Art Institute of Chicago, \"A Quarter Century of Collecting: Drawings Given to The Art Institute of Chicago, 1944-1970 by Margaret Day Blake,\" April 28-June 7, 1970, n.p., cat. 43 (ill.).\n\nBaltimore Museum of Art, \"Matisse as Draughtsman,\" 1971, pp. 68, 69 (ill.), cat. 24, cat. by Victor Carlson.\n\nUrbana-Champaign, Ill., Krannert Art Museum, University of Illinois, \"Drawings from the Collections of The Art Institute of Chicago,\" April 23\u2013May 14, 1972.\n\nFrankfurt am Main, Germany, St\u00e4dtische Galerie im St\u00e4delschen Kunstinstitut, \"Franz\u00f6sische Zeichnungen aus dem Art Institute of Chicago,\" February 10-April 10, 1977, pp. 168-169, cat. 81 (ill.).\n\nThe Art Institute of Chicago, \"Great Drawings from The Art Institute of Chicago: The Harold Joachim Years 1958-1983,\" July 24-September 30, 1985, pp. 178-179, cat. 82 (ill.), cat. by Martha Tedeschi; traveled to the St. Louis Museum of Art, March 10-May 16, 1986.\n\nStuttgart, Germany, the Staatsgalerie Stuttgart,  \"Themes and Variations,\" December 11, 1993-February 13, 1994, p. 48 (ill.), cat. 15, by Lydia Delectorskaya, et. al..",
                      "provenance_text":"The artist to Curt Glaser (1879-1943), Berlin, Switzerland, Italy, and New York, 1914 [E.V. Thaw and Company stock card]; by descent to his wife, Maria Glaser (n\u00e9e Maria Milch, 1901-1981; later Mrs. Maria Ash), New York [E.V. Thaw and Company stock card]; sold to Thomas Grange, London and E. V. Thaw and Company, New York, Dec. 11, 1963; sold to the Art Institute, 1964.",
                      "publishing_verification_level":"Web Cataloged",
                      "internal_department_id":3,
                      "fiscal_year":null,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":false,
                      "is_zoomable":true,
                      "max_zoom_window_size":1280,
                      "copyright_notice":"\u00a9 2018 Succession H. Matisse \/ Artists Rights Society (ARS), New York",
                      "has_multimedia_resources":false,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":21.9389,
                      "color":{
                         "h":37,
                         "l":86,
                         "s":47,
                         "percentage":0.008732356670273018,
                         "population":77
                      },
                      "latitude":null,
                      "longitude":null,
                      "latlon":null,
                      "is_on_view":false,
                      "on_loan_display":"<p>On loan to Kunstmuseum Basel in Basel for <i>The Collector Curt Glaser. From Champion of Modernism to Refugee<\/i><\/p>",
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Drawing and Watercolor",
                      "artwork_type_id":14,
                      "department_title":"Prints and Drawings",
                      "department_id":"PC-13",
                      "artist_id":35670,
                      "artist_title":"Henri Matisse",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         35670
                      ],
                      "artist_titles":[
                         "Henri Matisse"
                      ],
                      "category_ids":[
                         "PC-13"
                      ],
                      "category_titles":[
                         "Prints and Drawings"
                      ],
                      "term_titles":[
                         "graphite",
                         "paper (fiber product)",
                         "drawings (visual works)",
                         "prints and drawing"
                      ],
                      "style_id":null,
                      "style_title":null,
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         
                      ],
                      "style_titles":[
                         
                      ],
                      "classification_id":"TM-175",
                      "classification_title":"graphite",
                      "alt_classification_ids":[
                         "TM-5",
                         "TM-4"
                      ],
                      "classification_ids":[
                         "TM-175",
                         "TM-5",
                         "TM-4"
                      ],
                      "classification_titles":[
                         "graphite",
                         "drawings (visual works)",
                         "prints and drawing"
                      ],
                      "subject_id":null,
                      "alt_subject_ids":[
                         
                      ],
                      "subject_ids":[
                         
                      ],
                      "subject_titles":[
                         
                      ],
                      "material_id":"TM-2982",
                      "alt_material_ids":[
                         
                      ],
                      "material_ids":[
                         "TM-2982"
                      ],
                      "material_titles":[
                         "paper (fiber product)"
                      ],
                      "technique_id":null,
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         
                      ],
                      "technique_titles":[
                         
                      ],
                      "theme_titles":[
                         
                      ],
                      "image_id":"bbd00772-e317-3a25-3496-e934bd8ce6c2",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         
                      ],
                      "sound_ids":[
                         
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1964.1"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Portrait of Elsa Glaser"
                            ],
                            "weight":1073,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T00:30:01-06:00",
                      "updated_at":"2022-12-12T00:31:37-06:00",
                      "timestamp":"2022-12-12T10:29:15-06:00"
                   },
                   {
                      "id":18754,
                      "api_model":"artworks",
                      "api_link":"https:\/\/api.artic.edu\/api\/v1\/artworks\/18754",
                      "is_boosted":false,
                      "title":"Bust of a Woman",
                      "alt_titles":null,
                      "thumbnail":{
                         "lqip":"data:image\/gif;base64,R0lGODlhBAAFAPQAAElGS1FNTlJPUXZzdHt6eo2LiZGPj6ampbq6tr\/Au8TFvMTGvsrKxc3Ox97g2uLj3eTl3uvs5u3u6e7v6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoJIUDXQMEQMQ0yIEzoMYUggAOw==",
                         "width":5032,
                         "height":6493,
                         "alt_text":"A work made of bronze."
                      },
                      "main_reference_number":"1963.840",
                      "has_not_been_viewed_much":false,
                      "boost_rank":null,
                      "date_start":1851,
                      "date_end":1851,
                      "date_display":"1851",
                      "date_qualifier_title":"",
                      "date_qualifier_id":null,
                      "artist_display":"Charles Henri Joseph Cordier\nFrench, 1827-1905\nCast by: Eck et Durand Fondeur\nFrench, 19th century",
                      "place_of_origin":"France",
                      "dimensions":null,
                      "medium_display":"Bronze",
                      "inscriptions":"Inscribed and dated:  1851 \/ CCORDIER",
                      "credit_line":"Ada Turnbull Hertle Endowment",
                      "catalogue_display":null,
                      "publication_history":"\"R. & M. Andrade,\" Apollo 121, 423 (1960), p. x.\n\nArt Institute of Chicago, Annual Report, 1963-64, p. 19.\n\nJohn Maxon, Art Institute of Chicago Quarterly 58, 1 (1964).\n\nS. R\u00e9veilluad Kriz, L'Odyss\u00e9e d'un peintre: Drouet R\u00e9veilluad (Paris: Fischbacher, 1973), p. 17.\n\nInstitut f\u00fcr Auslandsbeziehungen, W\u00fcrttembergischer Kunstverein, Exotische Welten, Europ\u00e4sische phantasien (1987), pp. 357, 491, no. 3.62.\n\nNew York, Charles Janoray, LLC, A Golden Age of French Sculpture, 1850-1900 (2003), p. 40, fig. 2.\n\nParis, Mus\u00e9e d'Orsay, Charles Cordier, 1827-1905: l'autre et l'ailleurs (2004), pp. 19, 205, no. 475.\n\nFor comparison, see:\n\nStanislas Lami, Dictionnaire des sculpteurs de l\u2019\u00e9cole Francaise au dix-neuvi\u00e9me si\u00e8cle 1, reprint (Liechtenstein, 1970), p. 417.\n\nHugh Honour, The Image of the Black in Western Art IV, 2 (Cambridge, MA, 1976-1989), pp. 100-02, fig. 72.\n\nJeannine Durand-Revillon, \"Un promoteur de la sculpture polychrome sous le Second Empire, Charles-Henri-Joseph Cordier (1827-1905),\" Soc. Hist. Art Francais (1982), p. 192.\n\nHermann Pollig, et al, Exotische Welten, Europ\u00e4sische Phantasien (Stuttgart, 1987), pp. 357, 491, no. 3.62.\n\nAntoinette Le Normand-Romain, et al, La Sculpture ethnographique, de la V\u00e9nus hottentote \u00e0 la Tehura de Gauguin (Paris, 1994), p. 55, no. 33.\n\nElyse Nelson and Wendy S. Walters, eds., Fictions of Emancipation: Carpeaux's Why Born Enslaved! Reconsidered, exh. cat. (New Haven and London: Yale University Press, 2022), 50, 53, pl. 30, 67-9, 94.",
                      "exhibition_history":"New York, The Metropolitan Museum of Art, Fictions of Emancipation: Carpeaux's Why Born Enslaved! Reconsidered, Mar. 7, 2022-Mar. 5, 2023, pl. 30.",
                      "provenance_text":"Cast in Paris, 1851 and believed to be the original pair cast for the artist [see letter from Gerald Kerin in curatorial object file].  Sold directly by the artist to an English (Devon) private collector, 1851 [according to letter from William Redford, in curatorial file; Cordier brought ethnographic busts to the 1862 London Exposition, see Exotische Welten, p. 357].  Purchased from same collector by William Redford, the agent for Gerald Kerin, Ltd. [see same letter in curatorial file].  Sold by Gerald Kerin, Ltd. to the Art Institute, 1963.",
                      "publishing_verification_level":"Web Cataloged",
                      "internal_department_id":14,
                      "fiscal_year":1964,
                      "fiscal_year_deaccession":null,
                      "is_public_domain":true,
                      "is_zoomable":true,
                      "max_zoom_window_size":-1,
                      "copyright_notice":null,
                      "has_multimedia_resources":true,
                      "has_educational_resources":false,
                      "has_advanced_imaging":false,
                      "colorfulness":5.0955,
                      "color":{
                         "h":339,
                         "l":50,
                         "s":3,
                         "percentage":0.007632056381271369,
                         "population":70
                      },
                      "latitude":41.8798061640747,
                      "longitude":-87.6233076676725,
                      "latlon":"41.879806164075,41.879806164075",
                      "is_on_view":false,
                      "on_loan_display":"<p>On loan to The Metropolitan Museum of Art in New York City for <i>Fictions of Emancipation: Carpeaux Recast<\/i><\/p>",
                      "gallery_title":null,
                      "gallery_id":null,
                      "artwork_type_title":"Sculpture",
                      "artwork_type_id":3,
                      "department_title":"Painting and Sculpture of Europe",
                      "department_id":"PC-10",
                      "artist_id":5301,
                      "artist_title":"Charles Henri Joseph Cordier",
                      "alt_artist_ids":[
                         
                      ],
                      "artist_ids":[
                         5301
                      ],
                      "artist_titles":[
                         "Charles Henri Joseph Cordier"
                      ],
                      "category_ids":[
                         "PC-10"
                      ],
                      "category_titles":[
                         "Painting and Sculpture of Europe"
                      ],
                      "term_titles":[
                         "bronze",
                         "sculpture",
                         "bust\/head",
                         "copper alloy",
                         "nonferrous metal",
                         "metal",
                         "inorganic material"
                      ],
                      "style_id":null,
                      "style_title":null,
                      "alt_style_ids":[
                         
                      ],
                      "style_ids":[
                         
                      ],
                      "style_titles":[
                         
                      ],
                      "classification_id":"TM-13",
                      "classification_title":"sculpture",
                      "alt_classification_ids":[
                         "TM-347"
                      ],
                      "classification_ids":[
                         "TM-13",
                         "TM-347"
                      ],
                      "classification_titles":[
                         "sculpture",
                         "bust\/head"
                      ],
                      "subject_id":null,
                      "alt_subject_ids":[
                         
                      ],
                      "subject_ids":[
                         
                      ],
                      "subject_titles":[
                         
                      ],
                      "material_id":"TM-2430",
                      "alt_material_ids":[
                         "TM-2694",
                         "TM-2683",
                         "TM-2568",
                         "TM-2600"
                      ],
                      "material_ids":[
                         "TM-2430",
                         "TM-2694",
                         "TM-2683",
                         "TM-2568",
                         "TM-2600"
                      ],
                      "material_titles":[
                         "bronze",
                         "copper alloy",
                         "nonferrous metal",
                         "metal",
                         "inorganic material"
                      ],
                      "technique_id":null,
                      "alt_technique_ids":[
                         
                      ],
                      "technique_ids":[
                         
                      ],
                      "technique_titles":[
                         
                      ],
                      "theme_titles":[
                         
                      ],
                      "image_id":"725d19ab-4bd4-e640-86f2-a119e0a154e0",
                      "alt_image_ids":[
                         
                      ],
                      "document_ids":[
                         "cb00e703-1452-422c-b2cc-72857a172537"
                      ],
                      "sound_ids":[
                         "cb00e703-1452-422c-b2cc-72857a172537"
                      ],
                      "video_ids":[
                         
                      ],
                      "text_ids":[
                         
                      ],
                      "section_ids":[
                         
                      ],
                      "section_titles":[
                         
                      ],
                      "site_ids":[
                         
                      ],
                      "suggest_autocomplete_all":[
                         {
                            "input":[
                               "1963.840"
                            ],
                            "contexts":{
                               "groupings":[
                                  "accession"
                               ]
                            }
                         },
                         {
                            "input":[
                               "Bust of a Woman"
                            ],
                            "weight":7232,
                            "contexts":{
                               "groupings":[
                                  "title"
                               ]
                            }
                         }
                      ],
                      "source_updated_at":"2022-12-12T00:30:01-06:00",
                      "updated_at":"2022-12-12T00:31:37-06:00",
                      "timestamp":"2022-12-12T10:29:15-06:00"
                   }
                ],
                "info":{
                   "license_text":"The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
                   "license_links":[
                      "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
                      "https:\/\/www.artic.edu\/terms"
                   ],
                   "version":"1.5"
                },
                "config":{
                   "iiif_url":"https:\/\/www.artic.edu\/iiif\/2",
                   "website_url":"http:\/\/www.artic.edu"
                }
             }


            )
        )
    })
]