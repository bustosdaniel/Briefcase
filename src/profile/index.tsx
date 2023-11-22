import { Box, Stack, Typography } from "@mui/material";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import ProfileInformation from "./information";

export default function Profile() {
  return (
    <Box width="20%" alignSelf="baseline" marginRight="50px">
      <Box>
        <Box
          component="button"
          border="none"
          bgcolor="#FFF"
          color="#000"
          sx={{
            cursor: "pointer",
            ":hover": {
              bgcolor: "#e7e7e7",
              borderRadius: "10px",
              padding: "5px 15px",
              color: "#9a9a9a",
            },
          }}
        >
          <Stack flexDirection="row" alignItems="center">
            <SwitchAccountIcon
              fontSize="medium"
              sx={{ paddingRight: "10px" }}
            />
            <Typography
              variant="body1"
              fontSize="18px"
              fontWeight="500"
              textAlign="left"
            >
              Profile
            </Typography>
          </Stack>
        </Box>
        <ProfileInformation />
      </Box>
    </Box>
  );
}
