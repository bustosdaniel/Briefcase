import { Box, Link, Typography } from "@mui/material";
import { Projects } from "../catalogs";

export default function Repositories() {
  return (
    <Box
      width="80%"
      height="88vh"
      sx={{
        overflow: "auto",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {Projects.map((item) => (
        <Box
          key={item.id}
          margin="0 0 30px 0"
          padding="20px"
          borderRadius="10px"
          border="1px solid #c6c6c6"
        >
          <Typography fontSize="20px" fontWeight="600">
            {item.name}
          </Typography>
          <Typography fontSize="16px" paddingY="10px" fontWeight="400">
            {item.context}
          </Typography>
          <Box height="590px" margin="10px auto">
            <img
              src="https://i.pinimg.com/564x/89/25/a6/8925a64f6b430a0b1bb061dfbfa66bf4.jpg"
              alt="photo"
              width="100%"
              height="100%"
              style={{
                borderRadius: "15px",
              }}
            />
          </Box>
          <Link
            href={`${item.link}`}
            underline="none"
            sx={{
              ":hover": {
                bgcolor: "#e7e7e7",
                borderRadius: "10px",
                padding: "5px 15px",
                color: "#9a9a9a",
              },
            }}
          >
            {item.button}
          </Link>
        </Box>
      ))}
    </Box>
  );
}
