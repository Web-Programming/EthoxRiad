import { News } from "./entity";

export default class DashboardServices {
  getNews(): News[] {
    const data: News[] = [
      {
        id: 1,
        title: "Kantin telah dibuka",
        desc: "Kantin telah dibuka, silahkan makan siang",
        imageURL:
          "https://mirroradvertising.id/wp-content/uploads/2018/10/poster-pendidikan-20.jpg",
        createdAt: "2021-08-01T00:00:00Z",
      },
      {
        id: 2,
        title: "Kantin telah ditutup",
        desc: "Kantin telah ditutup, silahkan makan malam",
        imageURL:
          "https://mirroradvertising.id/wp-content/uploads/2018/10/poster-pendidikan-20.jpg",
        createdAt: "2021-08-01T00:00:00Z",
      },
      {
        id: 3,
        title: "Kantin telah dibuka",
        desc: "Kantin telah dibuka, silahkan makan siang",
        imageURL:
          "https://mirroradvertising.id/wp-content/uploads/2018/10/poster-pendidikan-20.jpg",
        createdAt: "2021-08-01T00:00:00Z",
      },
      {
        id: 4,
        title: "Kantin telah ditutup",
        desc: "Kantin telah ditutup, silahkan makan malam",
        imageURL:
          "https://mirroradvertising.id/wp-content/uploads/2018/10/poster-pendidikan-20.jpg",
        createdAt: "2021-08-01T00:00:00Z",
      },
    ];

    return data;
  }
}
