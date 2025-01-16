import Notification from "../models/notification.model.js"

export const getUserNotifications = async (req, res) => {
    try {
        const notifications = Notification.find({ recipient: req.user._id }).sort({ createdAt: -1 })
        .populate('relatedUser', 'name profilePicture username')
        .populate('relatedPost', 'content image');

        res.json(notifications);
    } catch (error) {
        console.error("Error in getUserNotifications controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const markNotificationAsRead = async (req, res) => {
    const notificationId = req.params.id;
    try {
        const notification = await Notification.findByIdAndUpdate(
            { _id: notificationId, recipient: req.user._id },
            { read: true },
            { new: true }
        )

        res.json(notification);
    } catch (error) {
        console.error("Error in markNotificationAsRead controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteNotification = async (req, res) => {
    const notificationId = req.params.id;
    try {
        await Notification.findByIdAndDelete({
            _id: notificationId,
            recipient: req.user._id
        });
        res.json({ message: "Notification deleted successfully" });
    } catch (error) {
        console.error("Error in deleteNotification controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}