import type { Schema, Struct } from '@strapi/strapi';

export interface FieldsClass extends Struct.ComponentSchema {
  collectionName: 'components_fields_classes';
  info: {
    displayName: 'Class';
  };
  attributes: {
    Class: Schema.Attribute.Enumeration<
      ['Economy', 'Premium Economy', 'Business', 'First']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Economy'>;
  };
}

export interface FieldsFlightCard extends Struct.ComponentSchema {
  collectionName: 'components_fields_flight_cards';
  info: {
    displayName: 'FlightCard';
    icon: 'plane';
  };
  attributes: {
    Airline: Schema.Attribute.Enumeration<
      [
        'Air India ',
        'Emirates ',
        'Qatar Airlines',
        'Turkish Airlines ',
        'Cathay Pacific ',
        'Ethiad ',
        'American Airlines',
        'Lufthansa  ',
        'Air Canada ',
        'United Airlines',
        'Swiss Delta ',
        'KLM ',
        'Air france ',
        'Virgin Atlantic ',
        'Kuwait Airways ',
        'Gulf Airlines ',
        'British Airways',
      ]
    > &
      Schema.Attribute.Required;
    Baggages: Schema.Attribute.String & Schema.Attribute.Required;
    LimitedAvailability: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Offers: Schema.Attribute.Component<'shared.points', true>;
    PriceHike: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface FieldsType extends Struct.ComponentSchema {
  collectionName: 'components_fields_types';
  info: {
    displayName: 'Type';
  };
  attributes: {
    Type: Schema.Attribute.Enumeration<
      [
        'Stop',
        'Non-Stop',
        'Student Friendly',
        'Family Seating',
        'Extra Baggage',
        'Premium Economy',
        'Business Class',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Stop'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_points';
  info: {
    displayName: 'Offers';
  };
  attributes: {
    Offer: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fields.class': FieldsClass;
      'fields.flight-card': FieldsFlightCard;
      'fields.type': FieldsType;
      'shared.media': SharedMedia;
      'shared.points': SharedPoints;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
