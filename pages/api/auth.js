export default function handler(req, res) {
    try {
        const password = req.body.password;
        if (password === process.env.SECRET_KEY) {
            res.status(200).json({ token: "a29601cc-c638-4e06-8cd1-bd92ee1ba5dc" })
        } else {
            res.status(401).json({ message: "Wrong password" })
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}
  