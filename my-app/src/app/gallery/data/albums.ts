export interface Album {
  name: string;
  artist: string;
  cover: string;
}

export interface Gallery {
  name: string;
  artist: string;
  cover: string;
}

export const listenNowAlbums: Album[] = [
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
];

export const madeForYouAlbums: Album[] = [
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/402347749_661262569463263_420593140549033974_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=bw7VFGk9fdMAX_hlDmf&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzNTY2MDQ0MTkwODMzMzY5NQ%3D%3D.2-ccb7-5&oh=00_AfCsjArOd6Ta7B4ONXVWDm2OeJzNvaupnetRBARYvLsBJg&oe=65DD85AA&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/408967576_263083636880944_6325586726467328876_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NjYuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=AAx8OzJQOdgAX_CAxIj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwOTQ3MDIzMjY0NDk1OTQ1Nw%3D%3D.2-ccb7-5&oh=00_AfBH18Q3I6BR-lgP6cYnBtpn6zA1DXYjdjgMHc1VXpu8kg&oe=65DF817F&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/429458347_929613798527825_2794033505719826883_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NjYuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=Ryl4XYyeVwQAX9G14Xc&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwOTQ3MDIzMjk3MjE4Mjk1MQ%3D%3D.2-ccb7-5&oh=00_AfBKOiudW85UFKGkJgPuCDaD9336yyYbqvyP8Nl_HhGbkQ&oe=65DE60A5&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/429430892_772052274378716_8309064664884982168_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NjYuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=Q2lo6Heuk9YAX-eIAOz&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwOTQ3MDIzMjY2MTkyMTUzOQ%3D%3D.2-ccb7-5&oh=00_AfC4sxKEkuMsNw_b0yA5vOt1wWaGunLEYNbtshDqSsnFmw&oe=65E005A1&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/426193174_229424110255840_3379798873491013669_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4NDcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=d0YaqVx-Qz0AX8O3Hq1&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMTI5MDU3OTU2Mzc3NjA4MA%3D%3D.2-ccb7-5&oh=00_AfDbwwqaMUBNL0brok0Ye5bRnHOHqYCbpj7RHvftCWQfcQ&oe=65DFD2FB&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/427365458_7456290774415183_4996337508589792635_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=EprISXGjB_cAX9_unLW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMTI5MDU3OTU2MzgzMDkzNQ%3D%3D.2-ccb7-5&oh=00_AfCY_atGxtPK5Kmy7vXc62GjykiO4mwDf-5aM7ix9i1FrQ&oe=65DE77CE&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/426171928_2371434559706575_1658962430831536268_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=cmf2LZBxcBkAX_IOElh&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMTI5MDU3OTU2MzgyMzUxMA%3D%3D.2-ccb7-5&oh=00_AfDdxY6WMc0pGAwHeLCbxbd0QTc_eaa9qOB0tDX5UxyJ1A&oe=65E00B81&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/424429366_1403719340249656_6343587447850958126_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=a7DcnBEyKscAX-SRhi6&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI5MzU3MTExODEwNTcxMjU1NA%3D%3D.2-ccb7-5&oh=00_AfDko-CbPEN_Uyd0o9y451FFI43gYyMny10mlkphM17JwA&oe=65DE5641&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/421813675_895592882306406_5434111718844347357_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE2MTMuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=Qpnr8nfxpaIAX-F5f2-&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NzAxODgyNjMwNjgzODQ1Ng%3D%3D.2-ccb7-5&oh=00_AfANjPEqEL_97q57fWfMBqZrNwtTEEL2W5gt_9N3IU0lKw&oe=65DFC876&_nc_sid=10d13b"
  }
];

export const gallery: Gallery[] =
[
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/402347749_661262569463263_420593140549033974_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=bw7VFGk9fdMAX_hlDmf&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzNTY2MDQ0MTkwODMzMzY5NQ%3D%3D.2-ccb7-5&oh=00_AfCsjArOd6Ta7B4ONXVWDm2OeJzNvaupnetRBARYvLsBJg&oe=65DD85AA&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/408967576_263083636880944_6325586726467328876_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NjYuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=AAx8OzJQOdgAX_CAxIj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwOTQ3MDIzMjY0NDk1OTQ1Nw%3D%3D.2-ccb7-5&oh=00_AfBH18Q3I6BR-lgP6cYnBtpn6zA1DXYjdjgMHc1VXpu8kg&oe=65DF817F&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/429458347_929613798527825_2794033505719826883_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NjYuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=Ryl4XYyeVwQAX9G14Xc&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwOTQ3MDIzMjk3MjE4Mjk1MQ%3D%3D.2-ccb7-5&oh=00_AfBKOiudW85UFKGkJgPuCDaD9336yyYbqvyP8Nl_HhGbkQ&oe=65DE60A5&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/429430892_772052274378716_8309064664884982168_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NjYuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=Q2lo6Heuk9YAX-eIAOz&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwOTQ3MDIzMjY2MTkyMTUzOQ%3D%3D.2-ccb7-5&oh=00_AfC4sxKEkuMsNw_b0yA5vOt1wWaGunLEYNbtshDqSsnFmw&oe=65E005A1&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/426193174_229424110255840_3379798873491013669_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4NDcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=d0YaqVx-Qz0AX8O3Hq1&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMTI5MDU3OTU2Mzc3NjA4MA%3D%3D.2-ccb7-5&oh=00_AfDbwwqaMUBNL0brok0Ye5bRnHOHqYCbpj7RHvftCWQfcQ&oe=65DFD2FB&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/427365458_7456290774415183_4996337508589792635_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=EprISXGjB_cAX9_unLW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMTI5MDU3OTU2MzgzMDkzNQ%3D%3D.2-ccb7-5&oh=00_AfCY_atGxtPK5Kmy7vXc62GjykiO4mwDf-5aM7ix9i1FrQ&oe=65DE77CE&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/426171928_2371434559706575_1658962430831536268_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=cmf2LZBxcBkAX_IOElh&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMTI5MDU3OTU2MzgyMzUxMA%3D%3D.2-ccb7-5&oh=00_AfDdxY6WMc0pGAwHeLCbxbd0QTc_eaa9qOB0tDX5UxyJ1A&oe=65E00B81&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/424429366_1403719340249656_6343587447850958126_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=a7DcnBEyKscAX-SRhi6&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI5MzU3MTExODEwNTcxMjU1NA%3D%3D.2-ccb7-5&oh=00_AfDko-CbPEN_Uyd0o9y451FFI43gYyMny10mlkphM17JwA&oe=65DE5641&_nc_sid=10d13b"
  },
  {
    "name": "",
    "artist": "",
    "cover": "https://scontent.cdninstagram.com/v/t51.2885-15/421813675_895592882306406_5434111718844347357_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE2MTMuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=Qpnr8nfxpaIAX-F5f2-&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NzAxODgyNjMwNjgzODQ1Ng%3D%3D.2-ccb7-5&oh=00_AfANjPEqEL_97q57fWfMBqZrNwtTEEL2W5gt_9N3IU0lKw&oe=65DFC876&_nc_sid=10d13b"
  }
];