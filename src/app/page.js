// const components = {
//   Boards: {
//     title: "Boards",
//     description:
//       'Trello board tasks organized and work moving forward. In a glance, see everything font "things to do" to "aww yeah, we did it!"',
//     imageUrl: "a",
//   },
// };

// export default async function useHandler(req, res) {
//   const { method } = req;
//   console.log(req);

//   switch (method) {
//     case "GET":
//       try {
//         console.log(res);
//         return res.status(200).json(components);
//       } catch (error) {
//         // res.status(error.status || 500).json({ message: error.message });
//       }
//       break;
//     default:
//       res.setHeader("Allow", ["GET"]);
//       return res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }

export default function handler(req, res) {
  console.log(req);
  console.log(res);
  res.status(200).json({ message: "Hello from Next.js!" });
}
