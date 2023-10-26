export interface IGif {
  id: string;
  type: string;
  slug: string;
  url: string;
  username: string;
  content_url: string;
  create_datetime: string;
  title: string;
  alt_text: string;
  images: {
    preview_gif: {
      height: number;
      size: number;
      url: string;
      width: number;
    };
  };
}

export interface GifData {
  data: IGif[];
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
}
