import React, { FC } from "react";
import { AppBar, Avatar, Badge, Box, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "@/ui";
import { AppDispatch, RootState } from "@/store";
import { setSearchValue } from "@/store/slices/products";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.png";

const SearchInput = styled(Input)`
  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
`;

export const Header: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const searchValue = useSelector(
    (state: RootState) => state.products.searchValue,
  );
  const watchList = useSelector(
    (state: RootState) => state.watchList.watchList,
  );

  const navigate = useNavigate();

  const handleClearSearch = () => {
    dispatch(setSearchValue(""));
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Box
            sx={{ marginRight: "70px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <SearchInput
              value={searchValue}
              onChange={handleSearchChange}
              showClearButton={true}
              onClear={handleClearSearch}
              placeholder="Search..."
              sx={{
                width: "70%",
                backgroundColor: "#EDEDF0",
                borderRadius: "32px",
                border: "none",
              }}
              InputProps={{
                style: { height: "48px" },
                startAdornment: (
                  <SearchIcon sx={{ marginRight: "16px", cursor: "pointer" }} />
                ),
              }}
            />
          </Box>

          <Badge
            badgeContent={watchList?.length || 0}
            color="error"
            sx={{ marginX: "26px" }}
          >
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/watch")}
            >
              Watch
            </Button>
          </Badge>

          <Avatar alt="Profile" src={avatar} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
