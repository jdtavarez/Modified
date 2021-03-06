export const fetchUser = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
)

export const updateUser = (user, userId) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${userId}`,
        data: user,
        contentType: false,
        processData: false
    })
};
