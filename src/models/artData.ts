    export interface Thumbnail {
        lqip: string;
        width: number;
        height: number;
        alt_text: string;
    }

    export interface Color {
        h: number;
        l: number;
        s: number;
        percentage: number;
        population: number;
    }

    export interface Contexts {
        groupings: string[];
    }

    export interface SuggestAutocompleteAll {
        input: string[];
        contexts: Contexts;
        weight?: number;
    }

    export interface ArtData {
        id: number;
        api_model: string;
        api_link: string;
        is_boosted: boolean;
        title: string;
        alt_titles?: any;
        thumbnail: Thumbnail;
        main_reference_number: string;
        has_not_been_viewed_much: boolean;
        boost_rank?: any;
        date_start: number;
        date_end: number;
        date_display: string;
        date_qualifier_title: string;
        date_qualifier_id?: any;
        artist_display: string;
        place_of_origin: string;
        dimensions?: any;
        medium_display: string;
        inscriptions: string;
        credit_line: string;
        catalogue_display?: any;
        publication_history: string;
        exhibition_history: string;
        provenance_text: string;
        publishing_verification_level: string;
        internal_department_id: number;
        fiscal_year: number;
        fiscal_year_deaccession?: any;
        is_public_domain: boolean;
        is_zoomable: boolean;
        max_zoom_window_size: number;
        copyright_notice?: any;
        has_multimedia_resources: boolean;
        has_educational_resources: boolean;
        has_advanced_imaging: boolean;
        colorfulness: number;
        color: Color;
        latitude: number;
        longitude: number;
        latlon: string;
        is_on_view: boolean;
        on_loan_display: string;
        gallery_title?: any;
        gallery_id?: any;
        artwork_type_title: string;
        artwork_type_id: number;
        department_title: string;
        department_id: string;
        artist_id: number;
        artist_title: string;
        alt_artist_ids: any[];
        artist_ids: number[];
        artist_titles: string[];
        category_ids: string[];
        category_titles: string[];
        term_titles: string[];
        style_id?: any;
        style_title?: any;
        alt_style_ids: any[];
        style_ids: any[];
        style_titles: any[];
        classification_id: string;
        classification_title: string;
        alt_classification_ids: string[];
        classification_ids: string[];
        classification_titles: string[];
        subject_id?: any;
        alt_subject_ids: any[];
        subject_ids: any[];
        subject_titles: any[];
        material_id: string;
        alt_material_ids: string[];
        material_ids: string[];
        material_titles: string[];
        technique_id?: any;
        alt_technique_ids: any[];
        technique_ids: any[];
        technique_titles: any[];
        theme_titles: any[];
        image_id: string;
        alt_image_ids: any[];
        document_ids: string[];
        sound_ids: string[];
        video_ids: any[];
        text_ids: any[];
        section_ids: any[];
        section_titles: any[];
        site_ids: any[];
        suggest_autocomplete_all: SuggestAutocompleteAll[];
        source_updated_at: Date;
        updated_at: Date;
        timestamp: Date;
    }