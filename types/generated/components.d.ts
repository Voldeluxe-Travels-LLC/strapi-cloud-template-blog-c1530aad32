import type { Schema, Struct } from '@strapi/strapi';

export interface FieldsDealCard extends Struct.ComponentSchema {
  collectionName: 'components_fields_deal_cards';
  info: {
    displayName: 'DealCard';
  };
  attributes: {
    ActualPrice: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Badge: Schema.Attribute.Enumeration<
      ['Popular', 'Best Deal', 'Hot Deal', 'Trending']
    > &
      Schema.Attribute.Required;
    DiscountedPrice: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    From: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    To: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FieldsFlightCard extends Struct.ComponentSchema {
  collectionName: 'components_fields_flight_cards';
  info: {
    displayName: 'FlightCard';
    icon: 'plane';
  };
  attributes: {
    Airline: Schema.Attribute.Component<'shared.airline', false> &
      Schema.Attribute.Required;
    Baggage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    LimitedAvailability: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Offers: Schema.Attribute.Component<'shared.points', true> &
      Schema.Attribute.Required;
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

export interface FieldsPopularRoutes extends Struct.ComponentSchema {
  collectionName: 'components_fields_popular_routes';
  info: {
    displayName: 'PopularRoutes';
  };
  attributes: {
    Airlines: Schema.Attribute.Component<'shared.airline', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Baggage: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Cabin: Schema.Attribute.Component<'shared.cabin', false> &
      Schema.Attribute.Required;
    From: Schema.Attribute.String & Schema.Attribute.Required;
    LimitedAvailability: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    To: Schema.Attribute.String & Schema.Attribute.Required;
    TripType: Schema.Attribute.Enumeration<['Round-Trip', 'One-way']> &
      Schema.Attribute.Required;
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

export interface SharedAirline extends Struct.ComponentSchema {
  collectionName: 'components_shared_airlines';
  info: {
    displayName: 'Airline';
  };
  attributes: {
    Airlines: Schema.Attribute.Enumeration<
      [
        'Air India',
        'Emirates',
        'Qatar Airways',
        'Turkish Airlines',
        'Cathay Pacific',
        'Etihad',
        'American Airlines',
        'Lufthansa',
        'Air Canada',
        'United Airlines',
        'Swiss',
        'Delta Airlines',
        'KLM',
        'Air France',
        'Virgin Atlantic',
        'Kuwait Airways',
        'Gulf Air',
        'British Airways',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedCabin extends Struct.ComponentSchema {
  collectionName: 'components_shared_cabins';
  info: {
    displayName: 'Cabin';
  };
  attributes: {
    Cabin: Schema.Attribute.Enumeration<
      ['Economy', 'Premium Economy', 'Business', 'First']
    > &
      Schema.Attribute.Required;
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
    MetaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    MetaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ShareImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
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
      'fields.deal-card': FieldsDealCard;
      'fields.flight-card': FieldsFlightCard;
      'fields.popular-routes': FieldsPopularRoutes;
      'fields.type': FieldsType;
      'shared.airline': SharedAirline;
      'shared.cabin': SharedCabin;
      'shared.media': SharedMedia;
      'shared.points': SharedPoints;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
