// READ
const sql =
    "SELECT * FROM STUDENT_ENROLEMENT";

// CREATE
const insert =
    "INSERT INTO STUDENT_ENROLEMENT(SID,MID,ACAD_YEAR) VALUES('9999','101','2026')";

// UPDATE
const update =
    "UPDATE STUDENT_ENROLEMENT SET ACAD_YEAR='2030' WHERE SID='9999'";

// DELETE
const remove =
    "DELETE FROM STUDENT_ENROLEMENT WHERE SID='9999'";

module.exports = {
    sql,
    insert,
    update,
    remove
};