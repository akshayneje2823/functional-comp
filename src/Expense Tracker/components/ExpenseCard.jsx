import { Box, Card, CardContent, Typography, styled } from "@mui/material";

const Container = styled(Box)`
disply: flex;
& > div {
    flex: 1;
    padding: 10px;
}
`

export default function ExpenseCard() {
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{ color: 'green' }}>20</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{ color: 'green' }}>20</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}
