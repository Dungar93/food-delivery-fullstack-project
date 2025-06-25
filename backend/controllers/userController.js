import userModel from "../modals/userModal.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';   // ✅ fix here
import validator from 'validator';

// login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        
        
        if (!email || !password) {
            return res.json({ success: false, message: "Email and password are required" });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "user doesn't exist" });
        }

        if (!user.password) {
            return res.json({ success: false, message: "User has no password set" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "incorrect password" });
        }

        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" });
    }
}


// create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// register
const registerUser = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "user already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "please enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);  // ✅ fix here
        const hashedPassword = await bcrypt.hash(password, salt);  // ✅ fix here

        const newUser = new userModel({ username, email, password: hashedPassword });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" });
    }
}

export { loginUser, registerUser };
