import React from "react";
import ListProduct from "./listProduct";
import SellingProduct from "./SellingProduct";

const DescriptionProfile = () => {
  return (
    <>
      <style>
        .profileIn input {"{"}
        width: 100%; height: 48px; border-radius: 5px; margin-bottom: 10px;
        {"}"}
      </style>
      <div
        className="col-lg-9 col-md-8"
        style={{ backgroundColor: "#f5f5f5", height: "auto" }}
      >
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-Store"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            style={{ padding: "50px 0" }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <section>
                <div className="p-3">
                  <h4>My profile store</h4>
                  <p>Manage your profile information</p>
                  <hr />
                </div>
                <div className="row">
                  <section
                    className="m-3 col-xl-3 row align-items-center"
                    style={{ display: "grid" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={require("../../assets/image/fotoprofile110.png")}
                        alt="profile"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 20,
                      }}
                    >
                      <button
                        style={{
                          width: 140,
                          height: 36,
                          borderRadius: 50,
                          border: 0,
                        }}
                      >
                        Select image
                      </button>
                    </div>
                  </section>
                  <section className="m-3 col-xl-8">
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Store name</h6>
                      </div>
                      <div className="col-md-8 profileIn">
                        <input type="text" placeholder="Store name" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Email</h6>
                      </div>
                      <div className="col-md-8 profileIn">
                        <input type="text" placeholder="example@gmail.com" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Phone number</h6>
                      </div>
                      <div className="col-md-8 profileIn">
                        <input type="text" placeholder="08xxxxxxxxxx" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Store description</h6>
                      </div>
                      <div className="col-md-8 profileIn">
                        <input type="text" placeholder="Store description" />
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-Product"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            style={{ padding: "50px 0" }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <section>
                <div className="p-3">
                  <h4>My product</h4>
                </div>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-items-tab"
                      data-toggle="tab"
                      data-target="#nav-items"
                      type="button"
                      role="tab"
                      aria-controls="nav-items"
                      aria-selected="true"
                    >
                      items
                    </button>
                    <button
                      className="nav-link"
                      id="nav-Sould-tab"
                      data-toggle="tab"
                      data-target="#nav-Sould"
                      type="button"
                      role="tab"
                      aria-controls="nav-Sould"
                      aria-selected="false"
                    >
                      Sould
                    </button>
                    <button
                      className="nav-link"
                      id="nav-Archived-tab"
                      data-toggle="tab"
                      data-target="#nav-Archived"
                      type="button"
                      role="tab"
                      aria-controls="nav-Archived"
                      aria-selected="false"
                    >
                      Archived
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-items"
                    role="tabpanel"
                    aria-labelledby="nav-items-tab"
                  >
                    <input
                      type="text"
                      style={{
                        width: 230,
                        height: "19.8px",
                        margin: 15,
                        padding: 20,
                        borderRadius: 50,
                        border: 0,
                        backgroundColor: "#efefef",
                      }}
                      placeholder="Search"
                    />
                    <ListProduct />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-Sould"
                    role="tabpanel"
                    aria-labelledby="nav-Sould-tab"
                  >
                    <input
                      type="text"
                      style={{
                        width: 230,
                        height: "19.8px",
                        margin: 15,
                        padding: 20,
                        border: 0,
                        backgroundColor: "#efefef",
                        borderRadius: 50,
                      }}
                      placeholder="Search"
                    />
                    <div
                      style={{
                        border: "1px solid",
                        height: 412,
                        margin: 15,
                      }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-Archived"
                    role="tabpanel"
                    aria-labelledby="nav-Archived-tab"
                  >
                    <input
                      type="text"
                      style={{
                        width: 230,
                        height: "19.8px",
                        margin: 15,
                        padding: 20,
                        border: 0,
                        backgroundColor: "#efefef",
                        borderRadius: 50,
                      }}
                      placeholder="Search"
                    />
                    <div
                      style={{
                        border: "1px solid",
                        height: 412,
                        margin: 15,
                      }}
                    />
                  </div>
                </div>
                <hr />
              </section>
            </div>
          </div>
          <SellingProduct/>
        </div>
      </div>
    </>
  );
};

export default DescriptionProfile;
